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

export default function TaxSummary(props: TaxSummaryProps) {

  const [user, setUser] = useState(getUser()); 
  const dependents = user.taxFilings?.dependents || 0;  // get dependents from taxFilings document or default to 0
  const married = user.taxFilings?.married;   // get marital status from taxFilings document

  const calculateRefundAmount = (formW2s: FormW2[], form1099s: Form1099[], dependents: number, married: boolean) => {
    let totalRefundAmount = 0;
    let totalAmountDue = 0;

  // Check if user has a completed w2 form
  if (formW2s) {
    totalRefundAmount = formW2s.reduce((acc, w2) => acc + (w2.wagesAndTips - w2.ssWithheld - w2.taxesWithheld - w2.medicareWithheld), 0);
  }

  // Check if user has a completed 1099 form and marital status
  if (form1099s) {
    if (married) {
      totalAmountDue = form1099s.reduce((acc, form1099) => {
        const income = form1099.totalCompensation;

        // Applies current US tax rate based on income for married couples (filing jointly)
        if (income <= 20550) {
          return acc + income * 0.10;
        } else if (income <= 83550) {
          return acc + 20550 * 0.10 + (income - 20550) * 0.12;
        } else if (income <= 178150) {
          return acc + 20550 * 0.10 + (83550 - 20550) * 0.12 + (income - 83550) * 0.22;
        } else if (income <= 340100) {
          return acc + 20550 * 0.10 + (83550 - 20550) * 0.12 + (178150 - 83550) * 0.22 + (income - 178150) * 0.24;
        } else if (income <= 431900) {
          return acc + 20550 * 0.10 + (83550 - 20550) * 0.12 + (178150 - 83550) * 0.22 + (340100 - 178150) * 0.24 + (income - 340100) * 0.32;
        } else if (income <= 647850) {
          return acc + 20550 * 0.10 + (83550 - 20550) * 0.12 + (178150 - 83550) * 0.22 + (340100 - 178150) * 0.24 + (431900 - 340100) * 0.32 + (income - 431900) * 0.35;
        } else {
          return acc + 20550 * 0.10 + (83550 - 20550) * 0.12 + (178150 - 83550) * 0.22 + (340100 - 178150) * 0.24 + (431900 - 340100) * 0.32 + (647850 - 431900) * 0.35 + (income - 647850) * 0.37;
        }
      }, 0);
    } else {
      totalAmountDue = form1099s.reduce((acc, form1099) => {
        const income = form1099.totalCompensation;

        // Applies current US tax rate based on income for unmarried or single 
        if (income <= 10275) {
          return acc + income * 0.10;
        } else if (income <= 41775) {
          return acc + 10275 * 0.10 + (income - 10275) * 0.12;
        } else if (income <= 89075) {
          return acc + 10275 * 0.10 + (41775 - 10275) * 0.12 + (income - 41775) * 0.22;
        } else if (income <= 170050) {
          return acc + 10275 * 0.10 + (41775 - 10275) * 0.12 + (89075 - 41775) * 0.22 + (income - 89075) * 0.24;
        } else if (income <= 215950) {
          return acc + 10275 * 0.10 + (41775 - 10275) * 0.12 + (89075 - 41775) * 0.22 + (170050 - 89075) * 0.24 + (income - 170050) * 0.32;
        } else if (income <= 539900) {
          return acc + 10275 * 0.10 + (41775 - 10275) * 0.12 + (89075 - 41775) * 0.22 + (170050 - 89075) * 0.24 + (215950 - 170050) * 0.32 + (income - 215950) * 0.35;
        } else {
          return acc + 10275 * 0.10 + (41775 - 10275) * 0.12 + (89075 - 41775) * 0.22 + (170050 - 89075) * 0.24 + (215950 - 170050) * 0.32 + (539900 - 215950) * 0.35 + (income - 539900) * 0.37;
        }
      }, 0);
    }
  }

    let refundAmount = Math.abs(totalRefundAmount - totalAmountDue);

    if (totalAmountDue > refundAmount) {
      totalAmountDue -= refundAmount;
      refundAmount = 0;
    } else {
      refundAmount -= totalAmountDue;
      totalAmountDue = 0;
    }

    // Deduct for dependents. $1,250 is the standard deduction per dependent
    const dependentDeduction = 1250 * dependents;
    if (totalAmountDue >= dependentDeduction) {
      totalAmountDue -= dependentDeduction;
    } else {
      totalRefundAmount += dependentDeduction;
    }

    return Math.round(refundAmount * 100) / 100;
  };


  

  return (
    <>
      <div style={containerStyle as React.CSSProperties}>
        <div className="bg-base-lightest" style={containerStyle as React.CSSProperties}>
          {(!props.isTaxFiling && props.taxFiling == undefined) && (
            <>
              <div className="bg-white padding-y-3 padding-x-5 border border-base-lighter">
                <h2>You have not submitted your taxes yet! <br></br> <br></br> Please navigate to the home page to begin the tax filing process.</h2>
              </div>
            </>
          )}

          {(props.isTaxFiling || (!props.isTaxFiling && props.taxFiling != undefined)) && (<Grid row>
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
                          {props.taxFiling?.dependents}
                        </div>
                      </Grid>
                    </Grid>

                    {/** hide these lines if there are no W2s */}
                    {!(user.formW2s == null) && (<><hr className="solid" style={{ marginBottom: "5px", marginTop: "35px" }}></hr>
                    <h2 style={{ textAlign: "center", marginBottom: "-15px" }}>W2s</h2>
                    <W2SummaryTable /></>)}

                    {/** hide these lines if there are no 1099s */}
                    {!(user.form1099s == null) && (<><hr className="solid" style={{ marginBottom: "5px", marginTop: "35px" }}></hr>
                    <h2 style={{ textAlign: "center", marginBottom: "-15px" }}>1099s</h2>
                    <Table1099 /></>)}

                    <hr className="solid" style={{ marginBottom: "5px", marginTop: "35px" }}></hr>
                    <Grid row style={{ display: "flex", justifyContent: "space-between" }}>
                    <Grid col={6} style={{}}>
                        <Label htmlFor="amount-due" style={{ fontWeight: "bold" }}>
                          Total Amount Due{' '}
                        </Label>
                        <div>
                          {"$" + calculateRefundAmount(user.formW2s || [], user.form1099s || [], dependents, married)}
                        </div>
                      </Grid>
                      <Grid col={6} style={{}}>
                        <Label htmlFor="estimated-refund" style={{ fontWeight: "bold" }}>
                          Estimated Refund Amount{' '}
                        </Label>
                        <div>
                          {"$" + calculateRefundAmount(user.formW2s || [], user.form1099s || [], dependents, married)}
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