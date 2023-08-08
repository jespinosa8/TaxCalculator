import { Grid } from '@trussworks/react-uswds';
import W2Form from './W2Form';
import W2Table from './W2SummaryTable';

const containerStyle = {
  maxWidth: "1280px",
  margin: "0 auto",
  padding: "2rem",
  textAlign: "center"
}

export default function W2Container() {
  return (
    <>
      <div style={containerStyle as React.CSSProperties}>
        <Grid row>
          <Grid col={6}>
            <W2Table />
          </Grid>
          <Grid col={6}>
            <W2Form isTaxFiling={false} />
          </Grid>
        </Grid>
      </div>
    </>
  );
}
