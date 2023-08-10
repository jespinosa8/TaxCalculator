import './Home.css'
import CustomCard from "../components/home/Card";
import { useNavigate } from 'react-router-dom';

export default function Home() {

  const navigate = useNavigate()

  function handleFileTaxesNow() {
      navigate("/tax-filing")
  }

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
        {/** hide this card and replace it with one that routes to the tax summary page if the user has already filed their taxes */}
        <CustomCard title="File Taxes Now" imageOnly={false} onClick={handleFileTaxesNow} imageSrc="/TaxFilingImage.jpg" imageHoverSrc="/TaxFilingImage - Dark.jpg" description="Begin the tax filing process" marginTop="300px" />
      </div>
    </>
  )
}