import { Grid } from '@trussworks/react-uswds';
import Form1099 from '../1099/Form1099';
import Table1099 from './Table1099';
import { useState } from 'react';
import { getUser } from '../../slices/UserSlice';

const containerStyle = {
  maxWidth: "1800px",
  margin: "0 auto",
  padding: "2rem",
  textAlign: "center"
}

export default function Container1099() {
  const [user, setUser] = useState(getUser())

  function handleCreateUpdate1099() {
    setUser(getUser())
  }

  return (
    <>
      <div style={containerStyle as React.CSSProperties}>
        <Grid row>
          {!(user.form1099s == null || user.form1099s.length == 0) && <Grid col={6}>
            <Table1099 />
          </Grid>
          }
          <Grid col={(user.form1099s == null || user.form1099s.length == 0) ? 12 : 6}>
            <Form1099 isTaxFiling={false} isNewForm={true} handleCreateUpdate1099={handleCreateUpdate1099}/>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
