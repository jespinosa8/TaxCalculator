import { Button, Form, Grid, Label, TextInput } from "@trussworks/react-uswds";
import StatesDropdown from "../dropdown/StatesDropdown";
import "./W2FormStyle.css";
import { useEffect } from "react";
import { useTranslation } from 'react-i18next';

interface W2FormProps {
  isTaxFiling: boolean

  handleCancel?: (event: any) => void
  handleSubmit?: (event: any) => void
}

export default function W2Form(props: W2FormProps) {

  const handleW2Submit = (): void => {
    // todo
  }

  const { t, i18n } = useTranslation();

  useEffect(() => {
    const lng = navigator.language;
    i18n.changeLanguage(lng);
  }, [])

  const lng = navigator.language;

  return (
    <>
      <main>
        <div className="bg-base-lightest">

          <div id="w2-submit-form">
            <Form onSubmit={handleW2Submit}>


              <h1>{t('w2Form.taxStatement')}</h1>
              {/* EMPLOYEE INFORMATION */}
              {/* <Label htmlFor="name" style={{ fontWeight: 'bold' }}>Employee Personal Information</Label>

              <Grid row style={{ display: "flex", justifyContent: "space-between" }}>

                <Grid col={4}>
                    <Label htmlFor="first-name-input">First Name</Label>
                    <TextInput id="first-name-input" name="firstName" type="text" required/>
                </Grid>
                <Grid col={4}>
                  <Label htmlFor="middle-name-input">Middle</Label>
                  <TextInput id="middle-name-input" name="middleName" type="text"/>
                </Grid>                

                <Grid col={4}>
                  <Label htmlFor="last-name-input">Last Name</Label>
                  <TextInput id="last-name-input" name="lastName" type="text" required/>
                </Grid>
                         
              </Grid> */}

              <Grid row style={{ display: "flex", justifyContent: "space-between" }}>

                {/* <Grid col={6} style={{ width: "48%" }}>

                  <Label htmlFor="street-address-input">Street Address</Label>
                  <TextInput id="street-address-input" name="streetAddress" type="text" required/>

                  <Label htmlFor="city-input">City</Label>
                  <TextInput id="city-input" name="city" type="text" required/>

                  <Label htmlFor="zip-input">Zip Code</Label>
                  <TextInput id="zip-input" name="zipCode" type="number" required/>

                </Grid> */}

                <Grid col={6} style={{ width: "48%" }}>

                  <Label htmlFor="street-address2-input">{t('w2Form.apt')}</Label>
                  <TextInput id="street-address2-input" name="streetAddress2" type="text" />

                  <Label htmlFor="state-input">{t('w2Form.state')}</Label>
                  <StatesDropdown />
                </Grid>

                {/* <Grid col={12}>
                  <Label htmlFor="employee-ssn-input">Social Security Number</Label>
                  <TextInput id="employee-ssn-input" name="employeeSsn" type="number"/>
                </Grid> */}

              </Grid>
              {/* EMPLOYER INFORMATION */}
              <Label htmlFor="name" style={{ fontWeight: 'bold' }}>{t('w2Form.employerInformationLabel')}</Label>

              <Grid row style={{ display: "flex", justifyContent: "space-between" }}>


                <Label htmlFor="city-input">{t('w2Form.city')}</Label>
                <TextInput id="city-input" name="city" type="text" required />

                <Grid col={12}>
                  <Label htmlFor="employer-name-input">{t('w2Form.employerName')}</Label>
                  <TextInput id="employer-name-input" name="employerName" type="text" />
                </Grid>

                <Grid col={12}>
                  <Label htmlFor="employer-address-input">{t('w2Form.streetAddress')}</Label>
                  <TextInput id="employer-address-input" name="employerAddress" type="text" />
                </Grid>

                <Grid col={6} style={{ width: "48%" }}>
                  <Label htmlFor="employer-city-input">{t('w2Form.employerCity')}</Label>
                  <TextInput id="employer-city-input" name="employerCity" type="text" />
                </Grid>

                <Grid col={6} style={{ width: "48%" }}>
                  <Label htmlFor="employer-state-input">{t('w2Form.employerState')}</Label>
                  <StatesDropdown />
                </Grid>

                <Grid col={6} style={{ width: "48%" }}>
                  <Label htmlFor="employer-zipCode-input">{t('w2Form.employerZip')}</Label>
                  <TextInput id="employer-zipCode-input" name="employerZipCode" type="number" />

                </Grid>

                <Grid col={12}>
                  <Label htmlFor="employer-ein-input">{t('w2Form.employerEin')}</Label>
                  <TextInput id="employer-ein-input" name="employerEin" type="number" />
                </Grid>

              </Grid>
              {/* EMPLOYER INFORMATION */}
              <Label htmlFor="name" style={{ fontWeight: 'bold' }}>{t('w2Form.employerInformationLabel')}</Label>

              {/* TAX WITHHELD INFORMATION */}
              <Label htmlFor="federal-income-tax--input">{t('w2Form.federalIncomeTaxWithheld')}</Label>
              <TextInput id="federal-income-tax-withheld-input" name="federalIncomeTaxWithheld" type="number" />

              <Label htmlFor="social-security-tax-withheld-input">{t('w2Form.socialSecurityTaxWithheld')}</Label>
              <TextInput id="social-security-tax-withheld-input" name="socialSecurityTaxWithheld" type="number" />

              <Label htmlFor="medicare-tax-withheld">{t('w2Form.medicareTaxWithheld')}</Label>
              <TextInput id="medicare-tax-withheld" name="medicareTaxWithheld" type="number" />

              {/* WAGES AND COMPENSATION */}
              <Label htmlFor="wages-input">{t('w2Form.wagesTipsOtherCompensation')}</Label>
              <TextInput id="wages-input" name="wages" type="number" />

              {props.isTaxFiling && (<Button type="button" onClick={props.handleCancel}>Cancel</Button>)}
              {props.isTaxFiling && (<Button type="button" onClick={props.handleSubmit}>Submit</Button>)}
              {!props.isTaxFiling && (<Button type="submit" data-close-modal='true'>{t('w2Form.submit')}</Button>)}
            </Form>

          </div>
        </div>
      </main>

    </>
  )
}

