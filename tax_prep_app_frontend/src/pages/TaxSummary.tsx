import { Button } from "@trussworks/react-uswds"


interface TaxSummaryProps {
  isTaxFiling: boolean

  handleBack?: (event: any) => void
  handleSubmit?: (event: any) => void
}

export default function TaxSummary(props: TaxSummaryProps) {

  return (
    <>


      {props.isTaxFiling && (<Button type="button" onClick={props.handleBack}>Back</Button>)}
      {props.isTaxFiling && (<Button type="button" onClick={props.handleSubmit}>Submit</Button>)}
    </>
  )
}