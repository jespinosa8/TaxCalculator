import { Table } from "@trussworks/react-uswds";
import { useEffect } from "react";
import { useTranslation } from 'react-i18next';
// import SubmitDate from "./SubmitDate";


export default function W2SummaryTable () {

  const { t, i18n } = useTranslation();

  useEffect(() => {
      const lng = navigator.language;
      i18n.changeLanguage(lng);
  }, [])

  const lng = navigator.language;

  return (
    <>
        <Table striped fullWidth className="bg-primary-lighter" >
          <thead>
              <tr>
                  <th>{t('w2Table.employee')}</th>
                  <th>{t('w2Table.employer')}</th>
                  <th>{t('w2Table.totalIncome')}</th>
                  <th>{t('w2Table.dateSubmitted')}</th>
              </tr>
          </thead>
          <tbody>
              {/* {tableData.map((w2) =>

                (
                  <tr key={w2.form_w2_id}>
                      <td>{w2.form_w2_id}</td>
                      <td>{w2.user_id}</td>
                      <td>{w2.tax_filing_id}</td>
                      <td>{w2.employerName}</td>
                      <td>{w2.ein}</td>
                      <td>{w2.employer_street1}</td>
                      <td>{w2.employer_street2}</td>
                      <td>{w2.employer_city}</td>
                      <td>{w2.employer_state}</td>
                      <td>{w2.employer_zip}</td>
                      <td>{w2.wages_and_tips}</td>
                      <td>{w2.ss_withheld}</td>
                      <td>{w2.taxes_withheld}</td>
                      <td>{w2.medicare_withheld}</td>
                      <SubmitDate/>
                  </tr>
                )
              )
              } */}
          </tbody>
        </Table>  
    </>
  )
}