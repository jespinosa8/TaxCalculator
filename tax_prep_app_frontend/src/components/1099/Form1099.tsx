import { Button, Form, Grid, Label, TextInput } from "@trussworks/react-uswds";
import StatesDropdown from "../dropdown/StatesDropdown";

// Function name can't begin with numbers
export default function Form1099 () {

  const handle1099Submit = (): void => {
    // todo
  }

  return (
    <>
      <div className="bg-base-lightest">

        <div id="w2-submit-form">
          <Form onSubmit={handle1099Submit}>            
            
            <h1>Non-Employee Compensation Form 1099-NEC</h1>
            
            {/* RECIPIENT INFORMATION */}            
            {/* <Label htmlFor="name" style={{ fontWeight: 'bold' }}>Recipient Information</Label>
            <Grid row style={{ display: "flex", justifyContent: "space-between" }}>

              <Grid col={4}>
                <Label htmlFor="first-name-input">First Name</Label>
                <TextInput id="first-name-input" name="first_name" type="text" required/>
              </Grid>

              <Grid col = {4}>
                <Label htmlFor="middle-name-input">Middle</Label>
                <TextInput id="middle-name-input" name="middle_name" type="text"/>
              </Grid>

              <Grid col={4}>
                <Label htmlFor="last-name-input">Last Name</Label>
                <TextInput id="last-name-input" name="last_name" type="text" required/>
              </Grid>

              <Grid col={4}>
                <Label htmlFor="ssn-input">Recipient Social Security Number</Label>
                <TextInput id="ssn-input" name="recipient_ssn" type="number" required/>
              </Grid>

              <Grid col={12}>
                <Label htmlFor="recipient-tin-input">Recipient's TIN</Label>
                <TextInput id="recipient-tin-input" name="recipient_tin" type="number"/>
              </Grid> 

            </Grid>    */}

            <Grid row style={{ display: "flex", justifyContent: "space-between" }}>
              {/* <Grid col={6} style={{ width: "48%" }}>
                <Label htmlFor="street-address-input">Street Address</Label>
                <TextInput id="street-address-input" name="streetAddress" type="text" required/>
              
                <Label htmlFor="city-input">City</Label>
                <TextInput id="city-input" name="city" type="text" required/>

                <Label htmlFor="zip-input">Zip Code</Label>
                <TextInput id="zip-input" name="zipCode" type="number" required/>
              </Grid>

              <Grid col={6} style={{ width: "48%" }}>
                <Label htmlFor="street-address2-input">Apt., Unit, Ste</Label>
                <TextInput id="street-address2-input" name="streetAddress2" type="text"/>

                <Label htmlFor="state-input">State</Label>
                <StatesDropdown/>
              </Grid> */}            
              
            </Grid>
                


              {/* PAYER'S INFORMATION */}
              <Label htmlFor="name" style={{ fontWeight: 'bold' }}>Payer's Information</Label>
            <Grid row style={{ display: "flex", justifyContent: "space-between" }}>

              <Grid col={12}>
                <Label htmlFor="payer-name-input">Payer's Name</Label>
                <TextInput id="payer-name-input" name="payer_name" type="text"/>
              </Grid>

              <Grid col={12}>
                <Label htmlFor="payer-address-input">Street Address</Label>
                <TextInput id="payer-address-input" name="payer_street1" type="text"/>
              </Grid>

              <Grid col={12}>
                <Label htmlFor="payer-address-input">Street Address 2</Label>
                <TextInput id="payer-address-input" name="payer_street2" type="text"/>
              </Grid>

              <Grid col={6} style={{ width: "48%" }}>
                <Label htmlFor="payer-city-input">City</Label>
                <TextInput id="payer-city-input" name="payer_city" type="text"/>
              </Grid>

              <Grid col={6} style={{ width: "48%" }}>
                <Label htmlFor="payer-state-input">State</Label>
                <StatesDropdown/>
              </Grid>

              <Grid col={6} style={{ width: "48%" }}>
                <Label htmlFor="payer-zipCode-input">Zip Code</Label>
                <TextInput id="payer-zipCode-input" name="payer_zip" type="number"/>
              </Grid>

              <Grid col={12}>
                <Label htmlFor="payer-tin-input">Payer's TIN</Label>
                <TextInput id="payer-tin-input" name="payer_tin" type="number"/>
              </Grid>
            </Grid>

              {/* TAX WITHHELD INFORMATION */}
              <Label htmlFor="federal-income-tax-input">Federal Income Tax Withheld</Label>
              <TextInput id="federal-income-tax-withheld-input" name="taxes_withheld2" type="number"/>             

              {/* WAGES AND COMPENSATION */}
              <Label htmlFor="compensation-input">Non-employee Compensation</Label>
              <TextInput id="compensation-input" name="total_compensation" type="number"/>

              <Button type="submit" data-close-modal='true'>Submit</Button>
          </Form>

        </div>
      </div>
    </>
  )
}