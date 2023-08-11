import React, { useEffect } from 'react'
import {
    Button,
    Grid,
    Label
} from '@trussworks/react-uswds'
import { User } from '../../slices/UserSlice'
import { useTranslation } from 'react-i18next';

interface DisplayPersonalInfoProps {
    user: User,
    hidden: boolean,
    handleUpdateTransition: () => void
}

export default function CreateEditUserAccount(props: DisplayPersonalInfoProps) {

    const { t, i18n } = useTranslation();

  useEffect(() => {
    const lng = navigator.language;
    i18n.changeLanguage(lng);
  }, [])

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
                                <h1 className="margin-bottom-0" style={{ fontSize: "3.2em", lineHeight: "1.1" }}>{t('personalInformationForm.title')}</h1>
                                <div>

                                    <Button type="button" style={{ marginTop: "20px", marginBottom: "10px" }} onClick={props.handleUpdateTransition}>{t('personalInformationForm.updateInformation')}</Button>

                                    <Grid>
                                        <Label htmlFor="username" style={{ fontWeight: "bold" }}>
                                            {t('personalInformationForm.username')}{' '}
                                        </Label>
                                        <div>{props.user.username}</div>

                                        <hr className="solid" style={{ marginBottom: "5px", marginTop: "35px" }}></hr>
                                        <Grid row style={{ display: "flex", justifyContent: "space-between" }}>
                                            <Grid col={6} style={{ width: "48%" }}>
                                                <Label htmlFor="first-name" style={{ fontWeight: "bold" }}>
                                                   {t('personalInformationForm.name')}{' '}
                                                </Label>
                                                <div>{props.user.userDetail.firstName + " " + props.user.userDetail.middleName + " " + props.user.userDetail.lastName}</div>


                                            </Grid>
                                            <Grid col={6} style={{ width: "48%" }}>
                                                <Label htmlFor="email" style={{ fontWeight: "bold" }}>
                                                    {t('personalInformationForm.email')}{' '}
                                                </Label>
                                                <div>{props.user.userDetail.email}</div>


                                            </Grid>

                                        </Grid>
                                    </Grid>

                                    <Grid row style={{ display: "flex", justifyContent: "space-between" }}>
                                        <Grid style={{ width: "48%" }}>
                                            <Label htmlFor="ssn" style={{ fontWeight: "bold" }}>
                                                {t('personalInformationForm.socialSecurity')}{' '}
                                            </Label>
                                            <div>{"*****" + ("" + props.user.userDetail.ssn).substring(5, 9)}</div>

                                        </Grid>
                                        <Grid style={{ width: "48%" }}>
                                            <Label htmlFor="date-of-birth" style={{ fontWeight: "bold" }}>
                                                {t('personalInformationForm.dob')}{' '}
                                            </Label>
                                            <div>{props.user.userDetail.dob}</div>

                                        </Grid>
                                    </Grid>

                                    <hr className="solid" style={{ marginBottom: "5px", marginTop: "35px" }}></hr>

                                    <Grid row style={{ display: "flex", justifyContent: "space-between" }}>
                                        <Grid col={6} style={{ width: "48%" }}>
                                            <Label htmlFor="street1" style={{ fontWeight: "bold" }}>
                                                {t('personalInformationForm.address1')}{' '}
                                            </Label>
                                            <div>{props.user.userDetail.street1}</div>

                                            <Label htmlFor="city" style={{ fontWeight: "bold" }}>
                                                {t('personalInformationForm.city')}{' '}
                                            </Label>
                                            <div>{props.user.userDetail.city}</div>

                                            {(!(props.user.userDetail.zip == null) && !(props.user.userDetail.zip == 0)) && (<><Label htmlFor="zip" style={{ fontWeight: "bold" }}>
                                                {t('personalInformationForm.zip')}{' '}
                                            </Label>
                                            <div>{props.user.userDetail.zip}</div></>)}

                                        </Grid>

                                        <Grid col={6} style={{ width: "48%" }}>

                                            {props.user.userDetail.street2 != "" && (<Label htmlFor="street2" style={{ fontWeight: "bold" }}>
                                                {t('personalInformationForm.address2')}{' '}
                                            </Label>)}
                                            {props.user.userDetail.street2 != "" && (<div>{props.user.userDetail.street2}</div>)}


                                            {(!(props.user.userDetail.state == null) && !(props.user.userDetail.state == "")) && (<><Label htmlFor="state" style={{ fontWeight: "bold" }}>
                                                {t('personalInformationForm.state')}{' '}
                                            </Label>
                                            <div>{props.user.userDetail.state}</div></>)}

                                            <Label htmlFor="country" style={{ fontWeight: "bold" }}>
                                                {t('personalInformationForm.country')}{' '}
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