import { Table } from "@trussworks/react-uswds";
import { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import { getUser } from "../../slices/UserSlice";
// import SubmitDate from "./SubmitDate";


export default function W2SummaryTable () {
  const [user, setUser] = useState(getUser())

  const { t, i18n } = useTranslation();

  useEffect(() => {
      const lng = navigator.language;
      i18n.changeLanguage(lng);
  }, [])

  const lng = navigator.language;

  function formatCurrency(amount: number): string {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
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
                  <tr key={w}>
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
    </>
  )
}