import React from 'react'
import {
    GridContainer,
    Grid,
    Form,
    Fieldset,
    Label,
    TextInput,
    Button,
    Link,
    DateInput,
    DateInputGroup,
    DatePicker
} from '@trussworks/react-uswds'

import StatesDropdown from '../components/dropdown/StatesDropdown'
import CountriesDropdown from '../components/dropdown/CountriesDropdown'

export default function SignUp() {
    const [showPassword, setShowPassword] = React.useState(false)
    const [username, setUsername] = React.useState<string>("")
    const [password, setPassword] = React.useState<string>("")
    const [retypedPassword, setRetypedPassword] = React.useState<string>("")
    const [ssn, setSsn] = React.useState<string>("")
    const [firstName, setFirstName] = React.useState<string>("")
    const [lastName, setLastName] = React.useState<string>("")
    const [email, setEmail] = React.useState<string>("")
    const [street1, setStreet1] = React.useState<string>("")
    const [street2, setStreet2] = React.useState<string>("")
    const [city, setCity] = React.useState<string>("")
    const [state, setState] = React.useState<string>("")
    const [country, setCountry] = React.useState<string>("")
    const [zip, setZip] = React.useState<number>(12345) // causes warnings without initial value
    const [dob, setDob] = React.useState<Date>()


    const user = {
        username: username,
        password: password
    }

    const userDetails = {
        ssn: ssn,
        dob: dob,
        firstName: firstName,
        lastName: lastName,
        email: email,
        street1: street1,
        street2: street2,
        city: city,
        state: state,
        country: country,
        zip: zip
    }

    const handleUsernameChange = (event: any) => {
        setUsername(event.target.value)
    }

    const handlePasswordChange = (event: any) => {
        setPassword(event.target.value)
    }

    const handleRetypedPasswordChange = (event: any) => {
        setRetypedPassword(event.target.value)
    }

    const handleFirstNameChange = (event: any) => {
        if (!/\d/.test(event.target.value)) {
            setFirstName(event.target.value)
        }
    }

    const handleLastNameChange = (event: any) => {
        if (!/\d/.test(event.target.value)) {
            setLastName(event.target.value)
        }
    }

    const handleSsnChange = (event: any) => {
        if (/^\d+$/.test(event.target.value)) {
            setSsn(event.target.value)
        }
    }

    const handleZipChange = (event: any) => {
        if (/^\d+$/.test(event.target.value) && (zip == undefined || zip?.toString().length <= 10)) {
            setZip(event.target.value)
        }
    }

    const handleEmailChange = (event: any) => {
        setEmail(event.target.value)
    }

    const handleStreet1Change = (event: any) => {
        setStreet1(event.target.value)
    }

    const handleStreet2Change = (event: any) => {
        setStreet2(event.target.value)
    }

    const handleCityChange = (event: any) => {
        if (!/\d/.test(event.target.value)) {
            setCity(event.target.value)
        }
    }

    const handleStateChange = (event: any) => {
        setState(event.target.value)
    }

    const handleCountryChange = (event: any) => {
        setCountry(event.target.value)
    }


    // todo
    //      validations:
    //          1. check if password matches retypedPassword
    //          2. username can't be in DB already (do this for email as well?)
    //          3. ssn shouldn't be in DB, should be a valid length
    //          4. no empty fields (except state if a country other than US is selected)
    const handleCreateAccountSubmit = (): void => {
        if (true) { // first check should be to see if username already exists

        }
        else if (password !== retypedPassword) {
            // passwords must match
        }
        // else if(check user and userDetail objects for any undefined properties EXCEPT city - if country is US, must have city) {
        //     must fill out each field
        // }
        // else if(zip length invalid) {}
        // else if(ssn length invalid) {}
        else {
            // POST
        }
    }

    const containerStyle = {
        maxWidth: "1280px",
        margin: "0 auto",
        padding: "2rem",
        textAlign: "center", // remove this if we want left aligned instead

    }

    return (
        <>
        <div style={containerStyle as React.CSSProperties}>
            {/* <main id="main-content" style={containerStyle as React.CSSProperties}> */}
                <div className="bg-base-lightest signup-form-outer-container" style={containerStyle as React.CSSProperties}>
                    {/* <GridContainer className="signup-form-inner-container usa-section" style={containerStyle as React.CSSProperties}> */}
                        {/* <Grid row className="margin-x-neg-205 flex-justify-center"> */}
                        <Grid col={12} className="padding-x-205 margin-bottom-4">

                            <div className="bg-white padding-y-3 padding-x-15 border border-base-lighter">
                                <h1 className="margin-bottom-0">Create account</h1>
                                <div className="">
                                    <Form onSubmit={handleCreateAccountSubmit} large>
                                        <Fieldset legend="Get started with an account.">
                                            <Grid>
                                                {/* <Grid row className="signup-form-grid-row signup-form-account-section"> */}

                                                <Label htmlFor="username">
                                                    Username{' '}
                                                </Label>
                                                <TextInput style={{ marginBottom: "35px" }}
                                                    id="username"
                                                    name="username"
                                                    type="text"
                                                    autoCapitalize="off"
                                                    autoCorrect="off"
                                                    required={true}
                                                    value={username}
                                                    onChange={handleUsernameChange}
                                                />

                                                <Label htmlFor="password-create-account">
                                                    Password{' '}
                                                </Label>
                                                <TextInput
                                                    id="password-create-account"
                                                    name="password"
                                                    type={showPassword ? 'text' : 'password'}
                                                    autoCapitalize="off"
                                                    autoCorrect="off"
                                                    required={true}
                                                    value={password}
                                                    onChange={handlePasswordChange}

                                                />

                                                <p className="usa-form__note">
                                                    <a
                                                        title="Show password"
                                                        className="usa-show-password"
                                                        aria-controls="password-create-account password-create-account-confirm"
                                                        onClick={(): void =>
                                                            setShowPassword((showPassword) => !showPassword)
                                                        }>
                                                        {showPassword ? 'Hide password' : 'Show password'}
                                                    </a>
                                                </p>

                                                <Label htmlFor="password-create-account-confirm" style={{ marginTop: "60px" }}>
                                                    Re-type Password{' '}
                                                </Label>
                                                <TextInput
                                                    id="password-create-account-confirm"
                                                    name="password-confirm"
                                                    type={showPassword ? 'text' : 'password'}
                                                    autoCapitalize="off"
                                                    autoCorrect="off"
                                                    required={true}
                                                    value={retypedPassword}
                                                    onChange={handleRetypedPasswordChange}
                                                />
                                                {/* </Grid> */}

                                                <hr className="solid" style={{ marginBottom: "5px", marginTop: "35px" }}></hr>
                                                <Grid row className="signup-form-grid-row signup-form-personal-section">
                                                    <Grid col={6} className="signup-form-grid-column">
                                                        <Label htmlFor="first-name">
                                                            First Name{' '}
                                                        </Label>
                                                        <TextInput
                                                            id="firstName"
                                                            name="firstName"
                                                            type="text"
                                                            autoCapitalize="off"
                                                            autoCorrect="off"
                                                            required={true}
                                                            value={firstName}
                                                            onChange={handleFirstNameChange}
                                                        />

                                                        <Label htmlFor="email">
                                                            Email address{' '}
                                                        </Label>
                                                        <TextInput
                                                            id="email"
                                                            name="email"
                                                            type="email"
                                                            autoCapitalize="off"
                                                            autoCorrect="off"
                                                            required={true}
                                                            value={email}
                                                            onChange={handleEmailChange}
                                                        />
                                                    </Grid>


                                                    <Grid col={6} className="signup-form-grid-column">


                                                        <Label htmlFor="last-name">
                                                            Last Name{' '}
                                                        </Label>
                                                        <TextInput
                                                            id="lastName"
                                                            name="lastName"
                                                            type="text"
                                                            autoCapitalize="off"
                                                            autoCorrect="off"
                                                            required={true}
                                                            value={lastName}
                                                            onChange={handleLastNameChange}
                                                        />

                                                        {/** todo: hide counter arrows */}
                                                        <Label htmlFor="ssn">
                                                            Social Security Number{' '}
                                                        </Label>
                                                        <TextInput
                                                            id="ssn"
                                                            name="ssn"
                                                            type="password"
                                                            autoCapitalize="off"
                                                            autoCorrect="off"
                                                            required={true}
                                                            value={ssn}
                                                            onChange={handleSsnChange}
                                                        />
                                                    </Grid>

                                                </Grid>
                                            </Grid>
                                            <Label htmlFor="date-of-birth">
                                                            Date of Birth{' '}
                                                        </Label>
                                                        <DatePicker id="datePickerId" name="datePickerName"></DatePicker>

                                            <hr className="solid" style={{ marginBottom: "5px", marginTop: "35px" }}></hr>

                                            <Grid row className="signup-form-grid-row">
                                                <Grid col={6} className="signup-form-grid-column">
                                                    <Label htmlFor="street1">
                                                        Address Line 1{' '}
                                                    </Label>
                                                    <TextInput
                                                        id="street1"
                                                        name="street1"
                                                        type="text"
                                                        autoCapitalize="off"
                                                        autoCorrect="off"
                                                        required={true}
                                                        value={street1}
                                                        onChange={handleStreet1Change}
                                                    />

                                                    <Label htmlFor="city">
                                                        City{' '}
                                                    </Label>
                                                    <TextInput
                                                        id="city"
                                                        name="city"
                                                        type="text"
                                                        autoCapitalize="off"
                                                        autoCorrect="off"
                                                        required={true}
                                                        value={city}
                                                        onChange={handleCityChange}
                                                    />


                                                    {/** todo: hide counter arrows */}
                                                    <Label htmlFor="zip">
                                                        Zip{' '}
                                                    </Label>
                                                    <TextInput
                                                        id="zip"
                                                        name="zip"
                                                        type="number"
                                                        required={true}
                                                        value={zip}
                                                        onChange={handleZipChange}
                                                    />
                                                </Grid>

                                                <Grid col={6} className="signup-form-grid-column">


                                                    <Label htmlFor="street2">
                                                        Address Line 2{' '}
                                                    </Label>
                                                    <TextInput
                                                        id="street2"
                                                        name="street2"
                                                        type="text"
                                                        autoCapitalize="off"
                                                        autoCorrect="off"
                                                        required={true}
                                                        value={street2}
                                                        onChange={handleStreet2Change}
                                                    />

                                                    {/** todo: create separate dropdown component with all 50 states to plug in here */}
                                                    <Label htmlFor="state">
                                                        State{' '}
                                                    </Label>
                                                    <StatesDropdown onChange={handleStateChange} />

                                                    <Label htmlFor="country">
                                                        Country{' '}
                                                    </Label>
                                                    <CountriesDropdown onChange={handleCountryChange} />
                                                </Grid>
                                            </Grid>

                                            <Button type="submit" style={{ marginTop: "40px" }}>Create account</Button>
                                        </Fieldset>
                                    </Form>
                                </div>
                            </div>
                            {/* todo: add link to login page */}
                            <p className="text-center">
                                Already have an account?{' '}
                                <Link href="link back to sign in page goes here">Sign in</Link>.
                            </p>
                        </Grid>

                        {/* </Grid> */}
                    {/* </GridContainer> */}
                </div>
            {/* </main> */}
            </div>
        </>
    )
}