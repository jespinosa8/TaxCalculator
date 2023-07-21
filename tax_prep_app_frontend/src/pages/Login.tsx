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

export default function Login() {
    const [username, setUsername] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [showPassword, setShowPassword] = React.useState(false)

    const handleUsernameChange = (event: any) => {
        setUsername(event.target.value)
    }

    const handlePasswordChange = (event: any) => {
        setPassword(event.target.value)
    }

    const handleLoginSubmit = (event: any): void => {
        event.preventDefault()

        if (true) { // if user with username and password exists
            // load user into store (redux) and send to home page
        }
        else {
            // inform user that the username and/or password is incorrect
        }
    }

    const containerStyle = {
        maxWidth: "1280px",
        margin: "0 auto",
        padding: "2rem",
        textAlign: "center",
        display: "flex",
        marginTop: "45px"
    }

    return (
        <>
            <main id="main-content" style={containerStyle as React.CSSProperties}
            >
                <div className="bg-base-lightest" style={containerStyle as React.CSSProperties}
                >
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
                                                value={username}
                                                onChange={handleUsernameChange}
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
                                        </Fieldset>
                                        <Button style={{ marginTop: "-15px" }} type="submit">Sign in</Button>
                                    </Form>
                                </div>

                                {/** todo: add link to signup page */}
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