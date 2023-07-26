import { Grid } from '@trussworks/react-uswds';
import W2Form from './W2Form';
import W2Table from './W2SummaryTable';

export default function W2Container() {
  return (
    <>
    
      <Grid row>
        <Grid col={6}>
          <W2Table />
        </Grid>
        <Grid col={6}>
          <W2Form />
        </Grid> 
      </Grid>
    
    </>
  );
}
