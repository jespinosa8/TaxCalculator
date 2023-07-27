import { Grid, GridContainer } from "@trussworks/react-uswds";
import Card1099 from "../components/home/Card1099";
import TaxFilingCard from "../components/home/TaxFilingCard";
import W2Card from "../components/home/W2Card";
import './Home.css'




export default function Home () {

  const containerStyle = {
    maxWidth: "1280px",
    margin: "0 auto",
    padding: "2rem",
    textAlign: "center",
    display: "flex",
    marginTop: "45px"
}

  return (
    <>
      <div id="home-page" style={containerStyle as React.CSSProperties}>
      <GridContainer>
          <Grid>
            <div id="home-page-flex">
              <div className="cards">
                <TaxFilingCard/>
              </div>
              <div className="cards">
                <Card1099 />
              </div>             
              <div className="cards">
                <W2Card />
              </div>
            </div>
          </Grid>
        </GridContainer>
      </div>
    </>
  )
}