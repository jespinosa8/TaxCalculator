import CreateEditUserAccount from '../components/account/CreateEditUserAccount'

export default function SignUp() {

    return (
        <>
            <CreateEditUserAccount accountExists={false} hidden={false} handleUpdateTransition={()=>{}}></CreateEditUserAccount>
        </>
    )
}