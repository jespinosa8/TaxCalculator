// TODO: fix width, and potentially rework ui to have different sections

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

const handleCreateAccountSubmit = (): void => {
    // todo
}

export default function SignUp() {
    const [showPassword, setShowPassword] = React.useState(false)

    return (
        <>
            <main id="main-content">
                <div className="bg-base-lightest">
                    <GridContainer className="signup-form-container usa-section">
                        <Grid row className="margin-x-neg-205 flex-justify-center">
                            <Grid
                                col={12}
                                className="padding-x-205 margin-bottom-4">

                                <div className="bg-white padding-y-3 padding-x-5 border border-base-lighter">
                                    <h1 className="margin-bottom-0">Create account</h1>
                                    <Form onSubmit={handleCreateAccountSubmit}>
                                        <Fieldset legend="Get started with an account.">
                                            <Grid row>

                                                <Grid col={6}>
                                                    <Label htmlFor="email">
                                                        Username{' '}
                                                    </Label>
                                                    <TextInput
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

                                                    {/** todo: center label */}
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
                                                    />

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
                                                    />

                                                    {/** todo: hide counter arrows */}
                                                    <Label htmlFor="ssn">
                                                        Social Security Number{' '}
                                                    </Label>
                                                    <TextInput
                                                        id="ssn"
                                                        name="ssn"
                                                        type="number"
                                                        autoCapitalize="off"
                                                        autoCorrect="off"
                                                        required={true}
                                                    />

                                                    <Label htmlFor="date-of-birth">
                                                        Date of Birth{' '}
                                                    </Label>
                                                    {/** todo: center this */}
                                                    <DateInputGroup>
                                                        <DateInput
                                                            id="dob"
                                                            name="dobName"
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
                                                            id="dob"
                                                            name="dobName"
                                                            label="Year"
                                                            unit="year"
                                                            maxLength={4}
                                                            minLength={4}
                                                        />
                                                    </DateInputGroup>
                                                </Grid>


                                                <Grid col={6}>
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

                                                    {/** todo: create separate dropdown component with all 50 states to plug in here */}
                                                    <Label htmlFor="state">
                                                        State{' '}
                                                    </Label>
                                                    <TextInput
                                                        id="state"
                                                        name="state"
                                                        type="text"
                                                        autoCapitalize="off"
                                                        autoCorrect="off"
                                                        required={true}
                                                    />

                                                    <Label htmlFor="country">
                                                        Country{' '}
                                                    </Label>
                                                    <TextInput
                                                        id="country"
                                                        name="country"
                                                        type="text"
                                                        autoCapitalize="off"
                                                        autoCorrect="off"
                                                        required={true}
                                                    />

                                                    {/** todo: hide counter arrows */}
                                                    <Label htmlFor="zip">
                                                        Zip Code{' '}
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
                                            </Grid>

                                            <Button type="submit">Create account</Button>
                                        </Fieldset>
                                    </Form>
                                </div>

                                <p className="text-center">
                                    Already have an account?{' '}
                                    <Link href="link back to sign in page goes here">Sign in</Link>.
                                </p>
                            </Grid>

                        </Grid>
                    </GridContainer>
                </div>
            </main>
        </>
    )
}