import { Grid } from "@trussworks/react-uswds";
import { Link } from "react-router-dom";


export default function W2Card() {

    return (
        <>
            <Grid className="bg-base-lightest">
                <h2>Add a W2</h2>
                <Link to='/add-w2'>Add W-2</Link>
            </Grid>
        </>
    )
}