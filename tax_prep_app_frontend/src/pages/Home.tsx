import './Home.css'
import CustomCard from "../components/home/Card";
import { useNavigate } from 'react-router-dom';
import { getUser } from '../slices/UserSlice';

export default function Home() {

  const user = getUser();


  const navigate = useNavigate()

  function handleFileTaxesNow() {
      navigate("/tax-filing")
  }

  function handleViewTaxSummary() {
    navigate("/tax-summary")
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
        {user.taxFilings == null ? 
        <CustomCard title="File Taxes Now" imageOnly={false} onClick={handleFileTaxesNow} imageSrc="/TaxFilingImage.jpg" imageHoverSrc="/TaxFilingImage - Dark.jpg" description="Begin the tax filing process" marginTop="300px" /> :
        <CustomCard title="View Tax Summary"  imageOnly={false} onClick={handleViewTaxSummary} imageSrc="/TaxFilingImage.jpg" imageHoverSrc="/TaxFilingImage - Dark.jpg" description="View the results of your tax filing" marginTop="300px" />
      }
      </div>
    </>
  )
}