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
    DateInputGroup
} from '@trussworks/react-uswds'

import StatesDropdown from '../components/dropdown/StatesDropdown'
import CountriesDropdown from '../components/dropdown/CountriesDropdown'

const handleCreateAccountSubmit = (): void => {
    // todo
}

export default function SignUp() {
    const [showPassword, setShowPassword] = React.useState(false)
    const [username, setUsername] = React.useState<string>("")
    const [password, setPassword] = React.useState<string>("")
    const [retypedPassword, setRetypedPassword] = React.useState<string>("")
    const [ssn, setSsn] = React.useState<string>("")
    const [firstName, setFirstName] = React.useState<string>("")
    const [lastName, setLastName] = React.useState<string>("")

    const user = {
        ssn: ssn,
        firstName: firstName,
        lastName: lastName
    }

    const userDetails = {

    }

    const handleFirstNameChange = (event: any) => {
        if(!/\d/.test(event.target.value)) {
            setFirstName(event.target.value)
        }
    }

    const handleLastNameChange = (event: any) => {
        if(!/\d/.test(event.target.value)) {
            setLastName(event.target.value)
        }
    }

    const handleSsnChange = (event: any) => {
        if(/^\d+$/.test(event.target.value)) {
            setSsn(event.target.value)
        }
    }

    return (
        <>
            <main id="main-content">
                <div className="bg-base-lightest signup-form-outer-container">
                    <GridContainer className="signup-form-inner-container usa-section" >
                        {/* <Grid row className="margin-x-neg-205 flex-justify-center"> */}
                        <Grid col={12} className="padding-x-205 margin-bottom-4">

                            <div className="bg-white padding-y-3 padding-x-15 border border-base-lighter" >
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

                                                        <Label htmlFor="date-of-birth">
                                                            Date of Birth{' '}
                                                        </Label>
                                                        {/** todo: center this; maybe look for a date picker component in trussworks */}
                                                        <DateInputGroup>
                                                            <DateInput
                                                                id="mob"
                                                                name="mobName"
                                                                label="Month"
                                                                unit="month"
                                                                maxLength={2}
                                                                minLength={2}
                                                            />
                                                            <DateInput
                                                                id="dob"
                                                                name="dobName"
                                                                label="Day"
                                                                unit="day"
                                                                maxLength={2}
                                                                minLength={2}
                                                            />
                                                            <DateInput
                                                                id="yob"
                                                                name="yobName"
                                                                label="Year"
                                                                unit="year"
                                                                maxLength={4}
                                                                minLength={4}
                                                            />
                                                        </DateInputGroup>

                                                    </Grid>

                                                </Grid>
                                            </Grid>


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
                                                    />


                                                    {/** todo: hide counter arrows */}
                                                    <Label htmlFor="zip">
                                                        Zip{' '}
                                                    </Label>
                                                    <TextInput
                                                        id="zip"
                                                        name="zip"
                                                        type="number"
                                                        autoCapitalize="off"
                                                        autoCorrect="off"
                                                        required={true}
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
                                                    />

                                                    {/** todo: create separate dropdown component with all 50 states to plug in here */}
                                                    <Label htmlFor="state">
                                                        State{' '}
                                                    </Label>
                                                    <StatesDropdown/>

                                                    <Label htmlFor="country">
                                                        Country{' '}/\d/.testss
                                                    </Label>
                                                    <CountriesDropdown/>
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
                    </GridContainer>
                </div>
            </main>
        </>
    )
}