import { useState } from "react"
import GeneralTaxInformation from "../components/taxFiling/GeneralTaxInformation"
import FormSelection from "../components/taxFiling/FormSelection"
import TaxSummary from "./TaxSummary"
import W2Form from "../components/w2/W2Form"
import Form1099 from "../components/1099/Form1099"
import { getUser } from "../slices/UserSlice"
import { useNavigate } from "react-router-dom"
import toast from "react-hot-toast"


export default function TaxFiling() {
  const [user, setUser] = useState(getUser())
  const [taxFiling, setTaxFiling] = useState({
    married: false,
    dependents: 0,
    totalRefundAmount: 0,
    totalAmountDue: 0
  })
  const navigate = useNavigate()

  /**
   * page 1: general tax info
   * page 2: page with buttons to add w2 and/or 1099
   * page 3: tax summary
   * 
   * page 5: add w2
   * page 6: add 1099
   */
  const [currentPage, setCurrentPage] = useState(1)

  const handleMarriedChange = (married: boolean) => {
    setTaxFiling((prev) => ({ ...prev, married: married }))
  }

  const handleDependentsChange = (event: any) => {
    setTaxFiling((prev) => ({ ...prev, dependents: event.target.value }))

  }

  const handleNextButtonClick = () => {
    if (currentPage == 2) {
      setTaxFiling((prev) => ({ ...prev, totalRefundAmound: calculateRefundAmount() }))
      setTaxFiling((prev) => ({ ...prev, totalAmountDue: calculateTotalAmountDue() }))
    }
    setCurrentPage(currentPage + 1)
  }

  const handleBackButtonClick = () => {
    setCurrentPage(currentPage - 1)
  }

  const handleAddW2lick = () => {
    setCurrentPage(5)
  }

  const handleAdd1099Click = () => {
    setCurrentPage(6)
  }

  const handleFormCancel = () => {
    setCurrentPage(2)
  }

  const handleTaxSummarySubmit = (event: any) => {
    setUser((prev) => ({ ...prev, taxFilings: taxFiling }))

    fetch('http://localhost:8080/users/' + user.id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user)
    })
      .then((res) => res.json())
      .then((data) => {
        setUser(data)
        localStorage.setItem('user', JSON.stringify(user))
        toast.success("1099 Successfully Submitted!")
        navigate("/")
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  const calculateRefundAmount = () => {
    // do calculations here 
    const amount = Math.round(
      (100) // <-- logic goes here --- the 100 is dummy data
      * 100) / 100
    return amount
  }

  const calculateTotalAmountDue = () => {
    // do calculations here 
    const amount = Math.round(
      (100) // <-- logic goes here --- the 100 is dummy data
      * 100) / 100
    return amount
  }

  const containerStyle = {
    maxWidth: "1280px",
    margin: "0 auto",
    padding: "2rem",
    textAlign: "center"
  }

  // maybe add some kind of progress tracker at the top separately that will show lit up circles with checkmarks depending on what step the user is on
  return (
    <>
      {currentPage == 1 && (<GeneralTaxInformation taxFiling={taxFiling} handleDependentChange={handleDependentsChange} handleMarried={handleMarriedChange} onNextClick={handleNextButtonClick} />)}
      {currentPage == 2 && (<FormSelection onNextClick={handleNextButtonClick} onBackClick={handleBackButtonClick} on1099Click={handleAdd1099Click} onW2Click={handleAddW2lick} />)}
      {currentPage == 3 && (<TaxSummary isTaxFiling={true} taxFiling={taxFiling} handleBack={handleBackButtonClick} handleSubmit={handleTaxSummarySubmit} />)}

      {currentPage == 5 && (
        <main id="main-content" style={containerStyle as React.CSSProperties}>
          <div className="bg-base-lightest" style={containerStyle as React.CSSProperties}>
            <W2Form isTaxFiling={true} isNewForm={true} handleCancel={handleFormCancel} />
          </div>
        </main>
      )}
      {currentPage == 6 && (
        <main id="main-content" style={containerStyle as React.CSSProperties}>
          <div className="bg-base-lightest" style={containerStyle as React.CSSProperties}>
            <Form1099 isTaxFiling={true} isNewForm={true} handleCancel={handleFormCancel} />
          </div>
        </main>
      )}

    </>
  )
}