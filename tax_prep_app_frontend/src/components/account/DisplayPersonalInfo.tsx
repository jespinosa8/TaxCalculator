import React from 'react'
import {
    Button,
    Grid,
    Label
} from '@trussworks/react-uswds'
import { User } from '../../slices/UserSlice'

interface DisplayPersonalInfoProps {
    user: User,
    hidden: boolean,
    handleUpdateTransition: () => void
}

export default function CreateEditUserAccount(props: DisplayPersonalInfoProps) {

    const containerStyle = {
        maxWidth: "1280px",
        margin: "0 auto",
        padding: "2rem",
        textAlign: "center",
        display: "flex"
    }

    return (
        <>
            {props.user && !props.hidden && (<div style={containerStyle as React.CSSProperties}>
                <div className="bg-base-lightest" style={containerStyle as React.CSSProperties}>
                    <Grid row>
                        <Grid col={12}>
                            <div className="bg-white padding-y-3 padding-x-15 border border-base-lighter">
                                <h1 className="margin-bottom-0" style={{ fontSize: "3.2em", lineHeight: "1.1" }}>Personal Information</h1>
                                <div>

                                    <Button type="button" style={{ marginTop: "20px", marginBottom: "10px" }} onClick={props.handleUpdateTransition}>Update Information</Button>

                                    <Grid>
                                        <Label htmlFor="username" style={{ fontWeight: "bold" }}>
                                            Username{' '}
                                        </Label>
                                        <div>{props.user.username}</div>

                                        <hr className="solid" style={{ marginBottom: "5px", marginTop: "35px" }}></hr>
                                        <Grid row style={{ display: "flex", justifyContent: "space-between" }}>
                                            <Grid col={6} style={{ width: "48%" }}>
                                                <Label htmlFor="first-name" style={{ fontWeight: "bold" }}>
                                                    Name{' '}
                                                </Label>
                                                <div>{props.user.userDetail.firstName + " " + props.user.userDetail.middleName + " " + props.user.userDetail.lastName}</div>


                                            </Grid>
                                            <Grid col={6} style={{ width: "48%" }}>
                                                <Label htmlFor="email" style={{ fontWeight: "bold" }}>
                                                    Email{' '}
                                                </Label>
                                                <div>{props.user.userDetail.email}</div>


                                            </Grid>

                                        </Grid>
                                    </Grid>

                                    <Grid row style={{ display: "flex", justifyContent: "space-between" }}>
                                        <Grid style={{ width: "48%" }}>
                                            <Label htmlFor="ssn" style={{ fontWeight: "bold" }}>
                                                Social Security Number{' '}
                                            </Label>
                                            <div>{"*****" + ("" + props.user.userDetail.ssn).substring(5, 9)}</div>

                                        </Grid>
                                        <Grid style={{ width: "48%" }}>
                                            <Label htmlFor="date-of-birth" style={{ fontWeight: "bold" }}>
                                                Date of Birth{' '}
                                            </Label>
                                            <div>{props.user.userDetail.dob}</div>

                                        </Grid>
                                    </Grid>

                                    <hr className="solid" style={{ marginBottom: "5px", marginTop: "35px" }}></hr>

                                    <Grid row style={{ display: "flex", justifyContent: "space-between" }}>
                                        <Grid col={6} style={{ width: "48%" }}>
                                            <Label htmlFor="street1" style={{ fontWeight: "bold" }}>
                                                Address Line 1{' '}
                                            </Label>
                                            <div>{props.user.userDetail.street1}</div>

                                            <Label htmlFor="city" style={{ fontWeight: "bold" }}>
                                                City{' '}
                                            </Label>
                                            <div>{props.user.userDetail.city}</div>

                                            {(!(props.user.userDetail.zip == null) && !(props.user.userDetail.zip == 0)) && (<><Label htmlFor="zip" style={{ fontWeight: "bold" }}>
                                                Zip{' '}
                                            </Label>
                                            <div>{props.user.userDetail.zip}</div></>)}

                                        </Grid>

                                        <Grid col={6} style={{ width: "48%" }}>

                                            {props.user.userDetail.street2 != "" && (<Label htmlFor="street2" style={{ fontWeight: "bold" }}>
                                                Address Line 2{' '}
                                            </Label>)}
                                            {props.user.userDetail.street2 != "" && (<div>{props.user.userDetail.street2}</div>)}


                                            {(!(props.user.userDetail.state == null) && !(props.user.userDetail.state == "")) && (<><Label htmlFor="state" style={{ fontWeight: "bold" }}>
                                                State{' '}
                                            </Label>
                                            <div>{props.user.userDetail.state}</div></>)}

                                            <Label htmlFor="country" style={{ fontWeight: "bold" }}>
                                                Country{' '}
                                            </Label>
                                            <div>{props.user.userDetail.country}</div>
                                        </Grid>
                                    </Grid>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>)}
        </>
    )
}