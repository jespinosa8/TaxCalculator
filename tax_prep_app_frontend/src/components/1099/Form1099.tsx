import { Button, Form, Label, TextInput } from "@trussworks/react-uswds";
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
            
            <h1>Nonemployee Compensation Form 1099-NEC</h1>
            
            {/* RECIPIENT INFORMATION */}            
            <Label htmlFor="name" style={{ fontWeight: 'bold' }}>Recipient Information</Label>
            
            <div id="name">
              <div  id="name-input" className="name-class">
                <Label htmlFor="first-name-input">First Name</Label>
                <TextInput id="first-name-input" name="firstName" type="text" required/>
              </div>

              <div  id="name-input2" className="name-class">
                <Label htmlFor="middle-name-input">Middle</Label>
                <TextInput id="middle-name-input" name="middleName" type="text"/>
              </div>

              <div  id="name-input3" className="name-class">
                <Label htmlFor="last-name-input">Last Name</Label>
                <TextInput id="last-name-input" name="lastName" type="text" required/>
              </div>  
            </div>
    

              <Label htmlFor="street-address-input">Street Address</Label>
              <TextInput id="street-address-input" name="streetAddress" type="text" required/>

              <Label htmlFor="street-address2-input">Apt., Unit, Ste</Label>
              <TextInput id="street-address2-input" name="streetAddress2" type="text"/>

              <Label htmlFor="city-input">City</Label>
              <TextInput id="city-input" name="city" type="text" required/>

              <Label htmlFor="state-input">State</Label>
              <StatesDropdown/>
              
              <Label htmlFor="zip-input">Zip Code</Label>
              <TextInput id="zip-input" name="zipCode" type="number" required/>
                


              {/* PAYER'S INFORMATION */}
              <Label htmlFor="name" style={{ fontWeight: 'bold' }}>Payer's Information</Label>

              <Label htmlFor="payer-name-input">Payer's Name</Label>
              <TextInput id="payer-name-input" name="payerName" type="text"/>

              <Label htmlFor="payer-address-input">Street Address</Label>
              <TextInput id="payer-address-input" name="payerAddress" type="text"/>

              <Label htmlFor="payer-city-input">City</Label>
              <TextInput id="payer-city-input" name="payerCity" type="text"/>

              <Label htmlFor="payer-state-input">State</Label>
              <StatesDropdown/>

              <Label htmlFor="payer-zipCode-input">Zip Code</Label>
              <TextInput id="payer-zipCode-input" name="payerZipCode" type="number"/>

              <Label htmlFor="payer-tin-input">Payer's TIN</Label>
              <TextInput id="payer-tin-input" name="payerEin" type="number"/>


              {/* TAX WITHHELD INFORMATION */}
              <Label htmlFor="federal-income-tax--input">Federal Income Tax Withheld</Label>
              <TextInput id="federal-income-tax-withheld-input" name="federalIncomeTaxWithheld" type="number"/>             

              {/* WAGES AND COMPENSATION */}
              <Label htmlFor="compensation-input">Nonemployee Compensation</Label>
              <TextInput id="compensation-input" name="compensation" type="number"/>

              <Button type="submit" data-close-modal='true'>Submit</Button>
          </Form>

          </div>
        </div>
    </>
  )
}