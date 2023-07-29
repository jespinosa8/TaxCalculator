import React, { useState } from "react"
import GeneralTaxInformation from "../components/taxFiling/GeneralTaxInformation"

export default function TaxFiling() {
    const [taxFiling, setTaxFiling] = useState({
      married: false,
      dependents: 0
    })
    const [currentPage, setCurrentPage] = useState(1)

    const handleMarriedChange = (married: boolean) => {
      setTaxFiling((prev) => ({ ...prev, married: married }))
    }

    const handleDependentsChange = (event: any) => {
      setTaxFiling((prev) => ({ ...prev, dependents: event.target.value }))

    }

    const handleGeneralTaxInfoNextButton = () => {
        setCurrentPage(2)
    }

    // maybe add some kind of progress tracker at the top separately that will show lit up circles with checkmarks depending on what step the user is on
    return (
        <>
          {currentPage == 1 && (<GeneralTaxInformation taxFiling={taxFiling} handleDependentChange={handleDependentsChange} handleMarried={handleMarriedChange} handleNextButtonClick={handleGeneralTaxInfoNextButton}></GeneralTaxInformation>)}
        
        </>
    )
}