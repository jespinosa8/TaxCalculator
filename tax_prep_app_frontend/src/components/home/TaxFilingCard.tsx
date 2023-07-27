import { Grid } from "@trussworks/react-uswds";
import { Link } from "react-router-dom";
import './TaxFilingCardStyle.css';

export default function TaxFilingCard() {


    return (
        <>
        <Grid className="bg-base-lightest" id="tax-filing-card">
            <h2>Add General Tax Information</h2>
            <Link to='/tax-filing'>Add General Tax Information</Link>
        </Grid>
        </>
    )
}