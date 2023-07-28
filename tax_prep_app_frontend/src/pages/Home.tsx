import './Home.css'
import CustomCard from "../components/home/Card";

export default function Home() {

  const containerStyle = {
    maxWidth: "750px",
    margin: "0 auto",
    padding: "2rem",
    textAlign: "center",
    display: "flex",
    marginTop: "85px",
    backgroundColor: "white"
  }

  return (
    <>
      <div className="bg-base-lightest" style={containerStyle as React.CSSProperties}>
        <CustomCard title="File Taxes Now" link="/tax-filing" imageSrc="/TaxFilingImage.jpg" imageHoverSrc="/TaxFilingImage - Dark.jpg" description="Begin the tax filing process" />
      </div>
    </>
  )
}