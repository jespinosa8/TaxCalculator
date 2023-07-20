import React from "react"
import {
    GridContainer,
    Grid,
    Form,
    Fieldset,
    Label,
    TextInput,
    Button,
    Link
} from "@trussworks/react-uswds"

const handleLoginSubmit = (): void => {
    // todo
}

export default function Login() {
    const [showPassword, setShowPassword] = React.useState(false)

    return (
        <>
            <main id="main-content">
                <div className="bg-base-lightest">
                    <GridContainer className="usa-section">
                        <Grid row={true} className="flex-justify-center">
                            <Grid col={12}>
                                <div className="bg-white padding-y-3 padding-x-5 border border-base-lighter">
                                    <Form onSubmit={handleLoginSubmit}>
                                        <Fieldset legend="Access your account" legendStyle="large">
                                            <Label style={{ marginTop: "25px" }} htmlFor="login">Username</Label>
                                            <TextInput
                                                id="username"
                                                name="username"
                                                type="text"
                                                autoCorrect="off"
                                                autoCapitalize="off"
                                                required={true}
                                            />

                                            <div style={{ marginBottom: "15px" }}></div>

                                            <Label htmlFor="login">Password</Label>
                                            <TextInput
                                                id="password-sign-in"
                                                name="password"
                                                type={showPassword ? 'text' : 'password'}
                                                autoCorrect="off"
                                                autoCapitalize="off"
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
                                        </Fieldset>
                                        <Button style={{ marginTop: "-15px" }} type="submit">Sign in</Button>
                                    </Form>
                                </div>

                                <p className="text-center">
                                    {"Don't have an account? "}
                                    <Link href="link to SignUp page goes here">Create your account now</Link>
                                    .
                                </p>
                            </Grid>
                        </Grid>
                    </GridContainer>
                </div>
            </main>
        </>
    )
}