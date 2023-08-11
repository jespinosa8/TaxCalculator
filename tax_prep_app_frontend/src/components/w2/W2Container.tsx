import { Grid } from '@trussworks/react-uswds';
import W2Form from './W2Form';
import W2Table from './W2SummaryTable';
import { useState } from 'react';
import { getUser } from '../../slices/UserSlice';

type FormW2Type = {
  ein: number
  employerCity: string
  employerName: string
  employerState: string
  employerStreet1: string
  employerStreet2: string
  employerZip: number
  medicareWithheld: number
  ssWithheld: number
  taxesWithheld: number
  wagesAndTips: number,
  dateSubmitted: string
}

const containerStyle = {
  maxWidth: "1800px",
  margin: "0 auto",
  padding: "2rem",
  textAlign: "center"
}


export default function W2Container() {
  const [user, setUser] = useState(getUser())

  const w2 : FormW2Type = {
    ein: 0,
    employerCity: "",
    employerName: "",
    employerState: "",
    employerStreet1: "",
    employerStreet2: "",
    employerZip: 0,
    medicareWithheld: 0,
    ssWithheld: 0,
    taxesWithheld: 0,
    wagesAndTips: 0,
    dateSubmitted: ""
  }

  function handleCreateUpdateW2() {
    setUser(getUser())
  }

  return (
    <>
      <div style={containerStyle as React.CSSProperties}>
        <Grid row>
          {!(user.formW2s == null || user.formW2s.length == 0) && <Grid col={6}>
            <W2Table />
          </Grid>
          }
          <Grid col={(user.formW2s == null || user.formW2s.length == 0) ? 12 : 6}>
            <W2Form isTaxFiling={false} isNewForm={true} existingForm={w2} handleCreateUpdateW2={handleCreateUpdateW2} />
          </Grid>
        </Grid>
      </div>
    </>
  );
}