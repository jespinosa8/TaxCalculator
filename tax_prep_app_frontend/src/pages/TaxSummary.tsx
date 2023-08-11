import { Button, Grid, Label } from "@trussworks/react-uswds"
import { useState } from "react"
import W2SummaryTable from "../components/w2/W2SummaryTable"
import Table1099 from "../components/1099/Table1099"
import { getUser } from "../slices/UserSlice"

interface taxFiling {
  married: boolean,
  dependents: number,
  totalRefundAmount: number,
  totalAmountDue: number
}

interface TaxSummaryProps {
  isTaxFiling: boolean
  
  taxFiling?: taxFiling
  
  handleBack?: (event: any) => void
  handleSubmit?: (event: any) => void
}

const containerStyle = {
  maxWidth: "1280px",
  margin: "0 auto",
  padding: "2rem",
  textAlign: "center",
  display: "flex",
  marginTop: "35px"
}

function formatCurrency(amount: number | undefined | null, currencyCode: string): string | null {
  if(amount == null || amount == undefined) {
    return null
  }
  else {
  const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currencyCode,
  });

  return formatter.format(amount);
}
}

export default function TaxSummary(props: TaxSummaryProps) {
console.log(props.taxFiling)
  const [user, setUser] = useState(getUser());   

  return (
    <>
      <div style={containerStyle as React.CSSProperties}>
        <div className="bg-base-lightest" style={containerStyle as React.CSSProperties}>
          {(!props.isTaxFiling && (user.taxFilings == null)) && (
            <>
              <div className="bg-white padding-y-3 padding-x-5 border border-base-lighter">
                <h2>You have not submitted your taxes yet! <br></br> <br></br> Please navigate to the home page to begin the tax filing process.</h2>
              </div>
            </>
          )}

          {(props.isTaxFiling || (!props.isTaxFiling && user.taxFilings != null)) && (<Grid row>
            <Grid col={12}>
              <div className="bg-white padding-y-3 padding-x-15 border border-base-lighter">
                <h1 className="margin-bottom-0" style={{ fontSize: 38 }}>{props.isTaxFiling ? "Step 3: Review and Submit" : "Tax Filing Summary"}</h1>
                <div>
                  <Grid>
                    <Grid row style={{ display: "flex", justifyContent: "space-between" }}>
                      <Grid col={6} style={{ width: "48%" }}>
                        <Label htmlFor="marital-status" style={{ fontWeight: "bold" }}>
                          Marital Status{' '}
                        </Label>
                        <div>
                          {props.taxFiling?.married ? "Married" : "Single"}
                        </div>
                      </Grid>
                      <Grid col={6} style={{ width: "48%" }}>
                        <Label htmlFor="dependents" style={{ fontWeight: "bold" }}>
                          Dependents{' '}
                        </Label>
                        <div>
                          {props.isTaxFiling ? props.taxFiling?.dependents : user.taxFilings.dependents}
                        </div>
                      </Grid>
                    </Grid>

                    {/** hide these lines if there are no W2s */}
                    {!(user.formW2s == null || user.formW2s.length == 0) && (<><hr className="solid" style={{ marginBottom: "5px", marginTop: "35px" }}></hr>
                    <h2 style={{ textAlign: "center", marginBottom: "-15px" }}>W2s</h2>
                    <W2SummaryTable /></>)}

                    {/** hide these lines if there are no 1099s */}
                    {!(user.form1099s == null || user.form1099s.length == 0) && (<><hr className="solid" style={{ marginBottom: "5px", marginTop: "35px" }}></hr>
                    <h2 style={{ textAlign: "center", marginBottom: "-15px" }}>1099s</h2>
                    <Table1099 /></>)}

                    <hr className="solid" style={{ marginBottom: "5px", marginTop: "35px" }}></hr>
                    <Grid row style={{ display: "flex", justifyContent: "space-between" }}>
                    <Grid col={6} style={{}}>
                        <Label htmlFor="amount-due" style={{ fontWeight: "bold" }}>
                          Total Amount Due{' '}
                        </Label>
                        <div>
                          {props.isTaxFiling ? formatCurrency(props.taxFiling?.totalAmountDue, 'USD') : formatCurrency(user.taxFilings.totalAmountDue, 'USD')}
                        </div>
                      </Grid>
                      <Grid col={6} style={{}}>
                        <Label htmlFor="estimated-refund" style={{ fontWeight: "bold" }}>
                          Estimated Refund Amount{' '}
                        </Label>
                        <div>
                          {props.isTaxFiling ? formatCurrency(props.taxFiling?.totalRefundAmount, 'USD') : formatCurrency(user.taxFilings.totalRefundAmount, 'USD')}
                        </div>
                      </Grid>
                    </Grid>

                  </Grid>
                </div>
                {props.isTaxFiling && (
                  <>
                    <div style={{ marginTop: "50px" }}></div>
                    <Button type="button" onClick={props.handleBack}>Back</Button>
                    <Button type="button" onClick={props.handleSubmit}>Submit</Button>
                  </>
                )}
              </div>
            </Grid>
          </Grid>
          )}
        </div>
      </div>
    </>
  )
}