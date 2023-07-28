import CreateEditUserAccount from '../components/account/CreateEditUserAccount'

const user = {
    username: "",
    password: "",
    enabled: true
}

const userDetails = {
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
}

export default function SignUp() {

    return (
        <>
            <CreateEditUserAccount accountExists={false} user={user} userDetails={userDetails} hidden={false} handleUpdateTransition={()=>{}}></CreateEditUserAccount>
        </>
    )
}