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
        <CustomCard title="File Taxes Now" onClick={handleFileTaxesNow} imageSrc="/TaxFilingImage.jpg" imageHoverSrc="/TaxFilingImage - Dark.jpg" description="Begin the tax filing process" />
      </div>
    </>
  )
}