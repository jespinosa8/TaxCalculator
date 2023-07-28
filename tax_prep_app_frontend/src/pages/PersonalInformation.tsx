import { useState } from "react"
import CreateEditUserAccount from "../components/account/CreateEditUserAccount"
import DisplayPersonalInfo from "../components/account/DisplayPersonalInfo"

// pull user via redux - this is for testing
const user = {
  username: "user123",
  password: "password",
  enabled: true
}

// pull userdetails via redux - this is for testing
const userDetails = {
  user: {},
  ssn: "123456789",
  dob: "2005-05-15",
  firstName: "Fname",
  middleName: "Mname",
  lastName: "Lname",
  email: "someemail@email.com",
  street1: "1st south north street",
  street2: "",
  city: "somecity",
  state: "Arizona",
  country: "United States",
  zip: "12345"
}

// this is for testing
const userDetailsTemp = {
  user: user,
  ssn: 123456789,
  dob: "05/15/2005",
  firstName: "Fname",
  middleName: "Mname",
  lastName: "Lname",
  email: "someemail@email.com",
  street1: "1st south north street",
  street2: "",
  city: "somecity",
  state: "Arizona",
  country: "United States",
  zip: 12345
}

export default function PersonalInformation () {

  const [showUpdateForm, setShowUpdateForm] = useState(false)

  const handleUpdateTransition = (): void => {
    setShowUpdateForm(!showUpdateForm)
  }

  return (
    <>
      <DisplayPersonalInfo
        user={user}
        userDetails={userDetailsTemp}
        hidden={showUpdateForm}
        handleUpdateTransition={handleUpdateTransition}
      ></DisplayPersonalInfo>

      <CreateEditUserAccount
        accountExists={true}
        user={user}
        userDetails={userDetails}
        hidden={showUpdateForm ? false : true}
        handleUpdateTransition={handleUpdateTransition}
      ></CreateEditUserAccount>
    </>
  )
}