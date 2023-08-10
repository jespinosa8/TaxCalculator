import { Button, Table } from "@trussworks/react-uswds";
import { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import { getUser } from "../../slices/UserSlice";

export default function W2SummaryTable () {
  const [user, setUser] = useState(getUser())
  const [showHover, setShowHover] = useState(false)

  const { t, i18n } = useTranslation();

  useEffect(() => {
      const lng = navigator.language;
      i18n.changeLanguage(lng);
  }, [])

  const lng = navigator.language;

  function formatCurrency(amount: number): string {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
}

function handleShowHover() {
  setShowHover(!showHover)
}

  return (
    <>
        <Table striped fullWidth className="bg-primary-lighter" >
          <thead>
              <tr>
                  <th>{t('w2Table.employer')}</th>
                  <th>{t('w2Table.totalIncome')}</th>
                  <th>{t('w2Table.ssWithheld')}</th>
                  <th>{t('w2Table.taxesWithheld')}</th>
                  <th>{t('w2Table.medicareWithheld')}</th>
                  {/* <th>{t('w2Table.dateSubmitted')}</th> */}
              </tr>
          </thead>
          <tbody>
              {user.formW2s == null ? <></> : user.formW2s.map((w2, w) =>
                  <tr key={w}
                  // style={showHover ? {borderColor: "#f0f0f0"} : {}} onClick={() => console.log(w2.employerName)} onMouseEnter={handleShowHover} onMouseLeave={handleShowHover}
                  >
                      <td>{w2.employerName}</td>
                      <td>{formatCurrency(w2?.wagesAndTips)}</td>
                      <td>{formatCurrency(w2?.ssWithheld)}</td>
                      <td>{formatCurrency(w2?.taxesWithheld)}</td>
                      <td>{formatCurrency(w2?.medicareWithheld)}</td>
                      {/* <td>{w2.dateSubmitted}</td> */}
                  </tr>
              )}
              
          </tbody>
        </Table>  
        <Button className="clickable-pencil" onClick={() => {}} type={"button"}>
  <span className="pencil-icon"></span>
  Edit
</Button>
    </>
  )
}