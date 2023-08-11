import { Button, Form, Grid, Label, TextInput } from "@trussworks/react-uswds";
import StatesDropdown from "../dropdown/StatesDropdown";
import { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import { getUser } from "../../slices/UserSlice";
import toast, { Toaster } from "react-hot-toast";

type Form1099Type = {
  payerCity: string
  payerName: string
  payerState: string
  payerStreet1: string
  payerStreet2: string
  payerTin: number
  payerZip: number
  taxesWithheld2: number
  totalCompensation: number
  dateSubmitted: string
}

interface Form1099Props {
  isTaxFiling: boolean
  isNewForm: boolean
  existingForm?: Form1099Type
  indexOf1099ToUpdate?: number

  handleCreateUpdate1099?: (event: any) => void
  handleCancel?: (event: any) => void
  handleSubmit?: (event: any) => void
}

// Function name can't begin with numbers
export default function Form1099(props: Form1099Props) {
  const [user, setUser] = useState(getUser())

  const [form1099, setForm1099] = useState(props.isNewForm ? {
    payerCity: "",
    payerName: "",
    payerState: "",
    payerStreet1: "",
    payerStreet2: "",
    payerTin: "", // convert this and below to numbers when writing to db
    payerZip: "",
    taxesWithheld2: "",
    totalCompensation: ""
  } : {
    payerCity: "" + props.existingForm?.payerCity,
    payerName: "" + props.existingForm?.payerName,
    payerState: "" + props.existingForm?.payerState,
    payerStreet1: "" + props.existingForm?.payerStreet1,
    payerStreet2: "" + props.existingForm?.payerStreet2,
    payerTin: "" + props.existingForm?.payerTin, // convert this and below to numbers when writing to db
    payerZip: "" + props.existingForm?.payerZip,
    taxesWithheld2: "" + props.existingForm?.taxesWithheld2,
    totalCompensation: "" + props.existingForm?.totalCompensation,
    dateSubmitted: "" + props.existingForm?.dateSubmitted
  }

  )

  const { t, i18n } = useTranslation();

  useEffect(() => {
    const lng = navigator.language;
    i18n.changeLanguage(lng);
  }, [])

  const lng = navigator.language;

  const handleTinChange = (event: any) => {
    if (event.target.value == "" || /^\d+$/.test(event.target.value)) {
      setForm1099((prev) => ({ ...prev, payerTin: event.target.value }))
    }
  }

  const handlePayerNameChange = (event: any) => {
    setForm1099((prev) => ({ ...prev, payerName: event.target.value }))
  }

  const handleStreet1Change = (event: any) => {
    setForm1099((prev) => ({ ...prev, payerStreet1: event.target.value }))

  }

  const handleStreet2Change = (event: any) => {
    setForm1099((prev) => ({ ...prev, payerStreet2: event.target.value }))
  }

  const handleCityChange = (event: any) => {
    if (!/\d/.test(event.target.value)) {
      setForm1099((prev) => ({ ...prev, payerCity: event.target.value }))
    }
  }

  const handleStateChange = (event: any) => {
    setForm1099((prev) => ({ ...prev, payerState: event.target.value }))

  }

  const handleZipChange = (event: any) => {
    if (event.target.value == "" || /^\d+$/.test(event.target.value)) {
      setForm1099((prev) => ({ ...prev, payerZip: event.target.value }))
    }
  }

  const handleTaxesWithheldChange = (event: any) => {
    if (event.target.value == "" || /^\d+$/.test(event.target.value)) {
      setForm1099((prev) => ({ ...prev, taxesWithheld2: event.target.value }))
    }
  }

  const handleCompensationChange = (event: any) => {
    if (event.target.value == "" || /^\d+$/.test(event.target.value)) {
      setForm1099((prev) => ({ ...prev, totalCompensation: event.target.value }))
    }
  }

  const handleCreate1099Submit = (event: any): void => {
    event.preventDefault()
    if (form1099.payerTin.length != 9) { // change the 9 to whatever the standard ein length is
      toast.error("EIN must 9 digits")
    }
    else if (form1099.payerZip.length != 5 && form1099.payerZip.length != 9) {
      toast.error("Zip must be 5 or 9 digits")
    }
    else {
      function getCurrentFormattedDate(): string {
        const now = new Date();
        const month = (now.getMonth() + 1).toString().padStart(2, '0');
        const day = now.getDate().toString().padStart(2, '0');
        const year = now.getFullYear().toString();

        return `${month}-${day}-${year}`;
      }
      const form1099Final = {
        payerTin: parseInt(form1099.payerTin),
        payerCity: form1099.payerCity,
        payerName: form1099.payerName,
        payerState: form1099.payerState,
        payerStreet1: form1099.payerStreet1,
        payerStreet2: form1099.payerStreet2,
        payerZip: parseInt(form1099.payerZip),
        taxesWithheld2: parseInt(form1099.taxesWithheld2),
        totalCompensation: parseInt(form1099.totalCompensation),
        submittedDate: getCurrentFormattedDate()
      }

      if(user.form1099s == null || user.form1099s.length == 0) {
        let newUser = user
        newUser.form1099s = [form1099Final]

        fetch('http://54.221.143.25:8080/users' + user.id, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser)
      })
        .then((res) => res.json())
        .then((data) => {
          setUser(data)
          setForm1099({
            payerCity: "",
            payerName: "",
            payerState: "",
            payerStreet1: "",
            payerStreet2: "",
            payerTin: "",
            payerZip: "",
            taxesWithheld2: "",
            totalCompensation: "",
            dateSubmitted: ""
          })
          localStorage.setItem('user', JSON.stringify(user))
          toast.success("1099 Successfully Submitted!")
          props.handleSubmit
        })
        .catch((err) => {
          console.log(err.message);
        });

      
      }
      else {
      user.form1099s.push(form1099Final)

      fetch('http://54.221.143.25:8080/users' + user.id, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user)
      })
        .then((res) => res.json())
        .then((data) => {
          setUser(data)
          setForm1099({
            payerCity: "",
            payerName: "",
            payerState: "",
            payerStreet1: "",
            payerStreet2: "",
            payerTin: "",
            payerZip: "",
            taxesWithheld2: "",
            totalCompensation: "",
            dateSubmitted: ""
          })
          localStorage.setItem('user', JSON.stringify(user))
          toast.success("1099 Successfully Submitted!")
          props.handleSubmit
        })
        .catch((err) => {
          console.log(err.message);
        });

      }
    }
  }

  const handleUpdate1099Submit = (event: any): void => {
    event.preventDefault()
    if (form1099.payerTin.length != 9) { // change the 9 to whatever the standard ein length is
      toast.error("EIN must 9 digits")
    }
    else if (form1099.payerZip.length != 5 && form1099.payerZip.length != 9) {
      toast.error("Zip must be 5 or 9 digits")
    }
    else {
      function getCurrentFormattedDate(): string {
        const now = new Date();
        const month = (now.getMonth() + 1).toString().padStart(2, '0');
        const day = now.getDate().toString().padStart(2, '0');
        const year = now.getFullYear().toString();

        return `${month}-${day}-${year}`;
      }
      const form1099Final = {
        payerTin: parseInt(form1099.payerTin),
        payerCity: form1099.payerCity,
        payerName: form1099.payerName,
        payerState: form1099.payerState,
        payerStreet1: form1099.payerStreet1,
        payerStreet2: form1099.payerStreet2,
        payerZip: parseInt(form1099.payerZip),
        taxesWithheld2: parseInt(form1099.taxesWithheld2),
        totalCompensation: parseInt(form1099.totalCompensation),
        submittedDate: getCurrentFormattedDate()
      }

      user.form1099s.push(form1099Final)

      fetch('http://54.221.143.25:8080/users' + user.id + '/form1099s/' + props.indexOf1099ToUpdate, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form1099Final)
      })
        .then((res) => res.json())
        .then((data) => {
          setUser(data)
          localStorage.setItem('user', JSON.stringify(user))
          // props.handleCreateUpdate1099
          toast.success("1099 Successfully Updated!")
        })
        .catch((err) => {
          console.log(err.message);
        });

    }
  }

  const containerStyle = {
    maxWidth: "1280px",
    margin: "0 auto",
    padding: "2rem",
    textAlign: "center",
    marginTop: "20px"
  }

  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <div className="bg-base-lightest" style={containerStyle as React.CSSProperties}>
        <div id="w2-submit-form" className="bg-white padding-y-3 padding-x-5 border border-base-lighter">
          <Form onSubmit={()=>{}}>

            <h1>{t('form1099.title')}</h1>
            {/* PAYER'S INFORMATION */}
            <Label htmlFor="name" style={{ fontWeight: 'bold' }}>{t('form1099.payersInformation')}</Label>
            <Grid row style={{ display: "flex", justifyContent: "space-between" }}>

              <Grid col={12}>
                <Label htmlFor="payer-name-input">{t('form1099.payersName')}</Label>
                <TextInput id="payer-name-input" name="payer_name" type="text" value={form1099.payerName} onChange={handlePayerNameChange} required={true} />

              </Grid>

              <Grid col={12}>
                <Label htmlFor="payer-address-input">{t('form1099.payersAddress')}</Label>
                <TextInput id="payer-address-input" name="payer_street1" type="text" value={form1099.payerStreet1} onChange={handleStreet1Change} required={true} />
              </Grid>

              <Grid col={12}>
                <Label htmlFor="payer-address-input">{t('form1099.payersAddress2')}</Label>
                <TextInput id="payer-address-input" name="payer_street2" type="text" value={form1099.payerStreet2} onChange={handleStreet2Change} required={false} />

              </Grid>

              <Grid col={6} style={{ width: "48%" }}>
                <Label htmlFor="payer-city-input">{t('form1099.payersCity')}</Label>
                <TextInput id="payer-city-input" name="payer_city" type="text" value={form1099.payerCity} onChange={handleCityChange} required={true} />

              </Grid>

              <Grid col={6} style={{ width: "48%" }}>
                <Label htmlFor="payer-state-input">{t('form1099.payersState')}</Label>
                <StatesDropdown value={form1099.payerState} onChange={handleStateChange} required={true} />
              </Grid>

              <Grid col={6} style={{ width: "48%" }}>
                <Label htmlFor="payer-zipCode-input">{t('form1099.payersZip')}</Label>
                <TextInput id="payer-zipCode-input" name="payer_zip" type="text" value={form1099.payerZip} onChange={handleZipChange} required={true} />

              </Grid>

              <Grid col={12}>
                <Label htmlFor="payer-tin-input">{t('form1099.payersTin')}</Label>
                <TextInput id="payer-tin-input" name="payer_tin" type="text" value={form1099.payerTin} onChange={handleTinChange} required={true} />

              </Grid>
            </Grid>

            {/* TAX WITHHELD INFORMATION */}
            <Label htmlFor="federal-income-tax-input">{t('form1099.federalIncomeTaxWithheld')}</Label>
            <TextInput id="federal-income-tax-withheld-input" name="taxes_withheld2" type="text" value={form1099.taxesWithheld2} onChange={handleTaxesWithheldChange} required={true} />

            {/* WAGES AND COMPENSATION */}
            <Label htmlFor="compensation-input">{t('form1099.nonemployeeCompensation')}</Label>
            <TextInput id="compensation-input" name="total_compensation" type="text" value={form1099.totalCompensation} onChange={handleCompensationChange} required={true} />

            {props.isTaxFiling && (<Button type="button" onClick={props.handleCancel}>Cancel</Button>)}
            {props.isNewForm && (<Button type="button" onClick={handleCreate1099Submit} data-close-modal='true'>{t('form1099.submit')}</Button>)}
            {(!props.isTaxFiling && !props.isNewForm) && (<Button type="button" onClick={handleUpdate1099Submit} data-close-modal='true'>Update</Button>)}

          </Form>

        </div>
      </div>
    </>
  )
}