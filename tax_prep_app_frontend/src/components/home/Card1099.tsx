import { Grid } from "@trussworks/react-uswds";
import { Link } from "react-router-dom";


export default function Card1099() {

    return (
        <>
            <Grid className="bg-base-lightest">
                <h2>Add a 1099</h2>
                <Link to='/add-1099'>Add 1099</Link>
            </Grid>
        </>
    )
}