import React from 'react'
import {
    Grid,
    Form,
    Fieldset,
    Label,
    TextInput,
    Button,
    Link,
    DatePicker
} from '@trussworks/react-uswds'

import StatesDropdown from '../components/dropdown/StatesDropdown'
import CountriesDropdown from '../components/dropdown/CountriesDropdown'
import toast, { Toaster } from 'react-hot-toast'

export default function SignUp() {
    const [showPassword, setShowPassword] = React.useState(false)
    const [retypedPassword, setRetypedPassword] = React.useState<string>("")

    const now = new Date();

    const [user, setUser] = React.useState({
        username: "",
        password: "",
        enabled: true
    })

    const [userDetails, setUserDetails] = React.useState({
        user: {},
        ssn: "",
        dob: "",
        firstName: "",
        middleName: "",
        lastName: "",
        email: "",
        street1: "",
        street2: "",
        city: "",
        state: "",
        country: "",
        zip: ""
    })

    const handleUsernameChange = (event: any) => {
        setUser((prev) => ({ ...prev, username: event.target.value }))
    }

    const handlePasswordChange = (event: any) => {
        setUser((prev) => ({ ...prev, password: event.target.value }))

    }

    const handleRetypedPasswordChange = (event: any) => {
        setRetypedPassword(event.target.value)
    }

    const handleFirstNameChange = (event: any) => {
        if (!/\d/.test(event.target.value)) {
            setUserDetails((prev) => ({ ...prev, firstName: event.target.value }))
        }
    }

    const handleMiddleNameChange = (event: any) => {
        if (!/\d/.test(event.target.value)) {
            setUserDetails((prev) => ({ ...prev, middleName: event.target.value }))
        }
    }


    const handleLastNameChange = (event: any) => {
        if (!/\d/.test(event.target.value)) {
            setUserDetails((prev) => ({ ...prev, lastName: event.target.value }))

        }
    }

    const handleSsnChange = (event: any) => {
        if (event.target.value == "" || /^\d+$/.test(event.target.value)) {
            setUserDetails((prev) => ({ ...prev, ssn: event.target.value }))
        }
    }

    const handleDobChange = (selectedDate?: string | undefined) => {
        setUserDetails((prev) => ({ ...prev, dob: selectedDate === undefined ? "" : selectedDate }))
    }

    const handleZipChange = (event: any) => {
        if (event.target.value == "" || /^\d+$/.test(event.target.value)) {
            setUserDetails((prev) => ({ ...prev, zip: event.target.value }))
        }

    }

    const handleEmailChange = (event: any) => {
        setUserDetails((prev) => ({ ...prev, email: event.target.value }))

    }

    const handleStreet1Change = (event: any) => {
        setUserDetails((prev) => ({ ...prev, street1: event.target.value }))

    }

    const handleStreet2Change = (event: any) => {
        setUserDetails((prev) => ({ ...prev, street2: event.target.value }))

    }

    const handleCityChange = (event: any) => {
        if (!/\d/.test(event.target.value)) {
            setUserDetails((prev) => ({ ...prev, city: event.target.value }))

        }
    }

    const handleStateChange = (event: any) => {
        if (userDetails.country == "United States") {
            setUserDetails((prev) => ({ ...prev, state: event.target.value }))
        }

    }

    const handleCountryChange = (event: any) => {
        if (event.target.value != "United States") { setUserDetails((prev) => ({ ...prev, state: "" })) }
        setUserDetails((prev) => ({ ...prev, country: event.target.value }))
    }

    const handleCreateAccountSubmit = (event: any): void => {
        event.preventDefault()

        if (false) { // first check should be to see if username already exists
            toast.error("This username already exists")
        }
        else if (user.password !== retypedPassword) {
            // passwords must match
            toast.error("Passwords must match")
        }
        else if (userDetails.ssn.length != 0 && userDetails.ssn.length != 9) {
            // ssn must either be blank or 9 digits
            toast.error("SSN must be blank or 9 digits")
        }
        else if (userDetails.zip.length != 0 && userDetails.zip.length != 5 && userDetails.zip.length != 9 && userDetails.zip.length != 10) {
            // zip must be blank, 5, 9, or 10 digits
            toast.error("Zip must be blank or 5, 9, or 10 digits")
        }
        else {
            // POST & redirect

            // cast ssn and zip strings to number, convert dob string to date, set all empty fields to null
            // create user -> new user return value here --- setUserDetails((prev) => ({...prev, user: data})) -> create final user details as new object and save that

            const userDetailsFinal = {
                user: userDetails.user,
                ssn: userDetails.ssn.length == 0 ? null : parseInt(userDetails.ssn),
                dob: new Date(userDetails.dob),
                firstName: userDetails.firstName,
                middleName: userDetails.middleName.length == 0 ? null : userDetails.middleName,
                lastName: userDetails.lastName,
                email: userDetails.email,
                street1: userDetails.street1,
                street2: userDetails.street2.length == 0 ? null : userDetails.street2,
                city: userDetails.city.length == 0 ? null : userDetails.city,
                state: userDetails.state.length == 0 ? null : userDetails.state,
                country: userDetails.country,
                zip: userDetails.zip.length == 0 ? null : parseInt(userDetails.zip)
            }

            console.log(userDetailsFinal)

            toast.success("Account Successfully Created!")
        }
    }

    const containerStyle = {
        maxWidth: "1280px",
        margin: "0 auto",
        padding: "2rem",
        textAlign: "center",
        display: "flex"
    }

    return (
        <>
            <div><Toaster /></div>
            <main id="main-content" style={containerStyle as React.CSSProperties}>
                <div className="bg-base-lightest" style={containerStyle as React.CSSProperties}>
                    <Grid row>
                        <Grid col={12}>
                            <div className="bg-white padding-y-3 padding-x-15 border border-base-lighter">
                                <h1 className="margin-bottom-0" style={{ fontSize: "3.2em", lineHeight: "1.1" }}>Create account</h1>
                                <div>
                                    <Form onSubmit={handleCreateAccountSubmit} large>
                                        <Fieldset legend="Get started with an account.">
                                            <Grid>
                                                <Label htmlFor="username">
                                                    Username{' '}
                                                </Label>
                                                <TextInput
                                                    id="username"
                                                    name="username"
                                                    type="text"
                                                    autoCapitalize="off"
                                                    autoCorrect="off"
                                                    required={true}
                                                    value={user.username}
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
                                                    value={user.password}
                                                    onChange={handlePasswordChange}
                                                />

                                                <Label htmlFor="password-create-account-confirm">
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

                                                <hr className="solid" style={{ marginBottom: "5px", marginTop: "55px" }}></hr>
                                                <Grid row style={{ display: "flex", justifyContent: "space-between" }}>
                                                    <Grid col={6} style={{ width: "48%" }}>
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
                                                            value={userDetails.firstName}
                                                            onChange={handleFirstNameChange}
                                                        />

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
                                                            value={userDetails.lastName}
                                                            onChange={handleLastNameChange}
                                                        />
                                                    </Grid>

                                                    <Grid col={6} style={{ width: "48%" }}>

                                                        <Label htmlFor="middle-name">
                                                            Middle Name{' '}
                                                        </Label>
                                                        <TextInput
                                                            id="middleName"
                                                            name="middleName"
                                                            type="text"
                                                            autoCapitalize="off"
                                                            autoCorrect="off"
                                                            required={false}
                                                            value={userDetails.middleName}
                                                            onChange={handleMiddleNameChange}
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
                                                            value={userDetails.email}
                                                            onChange={handleEmailChange}
                                                        />
                                                    </Grid>
                                                </Grid>
                                            </Grid>

                                            <Grid row style={{ display: "flex", justifyContent: "space-between" }}>
                                                <Grid style={{ width: "41%" }}>
                                                    <Label htmlFor="ssn">
                                                        Social Security Number{' '}
                                                    </Label>
                                                    <TextInput
                                                        id="ssn"
                                                        name="ssn"
                                                        type="password"
                                                        autoCapitalize="off"
                                                        autoCorrect="off"
                                                        required={false}
                                                        value={userDetails.ssn}
                                                        onChange={handleSsnChange}
                                                    />
                                                </Grid>
                                                <Grid style={{ width: "55%" }}>
                                                    <Label htmlFor="date-of-birth">
                                                        Date of Birth{' '}
                                                    </Label>
                                                    <DatePicker
                                                        id="dobId" name="dob" maxDate={"" + now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDate()} required={true} onChange={handleDobChange}>
                                                    </DatePicker>
                                                </Grid>
                                            </Grid>

                                            <hr className="solid" style={{ marginBottom: "5px", marginTop: "35px" }}></hr>

                                            <Grid row style={{ display: "flex", justifyContent: "space-between" }}>
                                                <Grid col={6} style={{ width: "48%" }}>
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
                                                        value={userDetails.street1}
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
                                                        required={false}
                                                        value={userDetails.city}
                                                        onChange={handleCityChange}
                                                    />

                                                    <Label htmlFor="zip">
                                                        Zip{' '}
                                                    </Label>
                                                    <TextInput
                                                        id="zip"
                                                        name="zip"
                                                        type="text"
                                                        required={false}
                                                        value={userDetails.zip}
                                                        onChange={handleZipChange}
                                                    />
                                                </Grid>

                                                <Grid col={6} style={{ width: "48%" }}>

                                                    <Label htmlFor="street2">
                                                        Address Line 2{' '}
                                                    </Label>
                                                    <TextInput
                                                        id="street2"
                                                        name="street2"
                                                        type="text"
                                                        autoCapitalize="off"
                                                        autoCorrect="off"
                                                        required={false}
                                                        value={userDetails.street2}
                                                        onChange={handleStreet2Change}
                                                    />

                                                    <Label htmlFor="state">
                                                        State{' '}
                                                    </Label>
                                                    <StatesDropdown value={userDetails.state} disabled={userDetails.country != "United States"} onChange={handleStateChange} />

                                                    <Label htmlFor="country">
                                                        Country{' '}
                                                    </Label>
                                                    <CountriesDropdown required={true} onChange={handleCountryChange} />
                                                </Grid>
                                            </Grid>

                                            <Button type="submit" style={{ marginTop: "40px" }}>Create account</Button>
                                        </Fieldset>
                                    </Form>
                                </div>
                            </div>
                            <p className="text-center">
                                Already have an account?{' '}
                                <Link href="/login">Sign in</Link>.
                            </p>
                        </Grid>
                    </Grid>
                </div>
            </main>
        </>
    )
}