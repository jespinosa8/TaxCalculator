import { Grid } from '@trussworks/react-uswds';
import Form1099 from '../1099/Form1099';
import Table1099 from './Table1099';

const containerStyle = {
  maxWidth: "1280px",
  margin: "0 auto",
  padding: "2rem",
  textAlign: "center"
}

export default function Container1099() {
  return (
    <>
      <div style={containerStyle as React.CSSProperties}>
        <Grid row>
          <Grid col={6}>
            <Table1099 />
          </Grid>
          <Grid col={6}>
            <Form1099 isTaxFiling={false} />
          </Grid>
        </Grid>
      </div>
    </>
  );
}
