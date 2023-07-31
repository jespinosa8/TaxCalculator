import { Grid } from '@trussworks/react-uswds';
import Form1099 from '../1099/Form1099';
import Table1099 from './Table1099';

export default function Container1099() {
  return (
    <>
      <Grid row>
        <Grid col={6}>
          <Table1099 />
        </Grid>
        <Grid col={6}>
          <Form1099 isTaxFiling={false} />
        </Grid> 
      </Grid>     
    </>
  );
}
