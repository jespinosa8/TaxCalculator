import { useState } from "react"
import GeneralTaxInformation from "../components/taxFiling/GeneralTaxInformation"
import FormSelection from "../components/taxFiling/FormSelection"
import TaxSummary from "./TaxSummary"
import W2Form from "../components/w2/W2Form"
import Form1099 from "../components/1099/Form1099"


export default function TaxFiling() {
  const [taxFiling, setTaxFiling] = useState({
    married: false,
    dependents: 0
  })

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

  const handleW2FormSubmit = (event: any) => {

  }

  const handle1099FormSubmit = (event: any) => {

  }

  const handleFormCancel = () => {
    setCurrentPage(2)
  }

  const handleTaxSummarySubmit = (event: any) => {

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
            <W2Form isTaxFiling={true} handleSubmit={handleW2FormSubmit} handleCancel={handleFormCancel} />
          </div>
        </main>
      )}
      {currentPage == 6 && (
        <main id="main-content" style={containerStyle as React.CSSProperties}>
          <div className="bg-base-lightest" style={containerStyle as React.CSSProperties}>
            <Form1099 isTaxFiling={true} handleSubmit={handle1099FormSubmit} handleCancel={handleFormCancel} />
          </div>
        </main>
      )}

    </>
  )
}