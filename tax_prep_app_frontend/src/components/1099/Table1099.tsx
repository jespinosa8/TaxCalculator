import { Table } from "@trussworks/react-uswds";
import { useEffect } from "react";
import { useTranslation } from 'react-i18next';

export default function Table1099 () {

  const { t, i18n } = useTranslation();

  useEffect(() => {
      const lng = navigator.language;
      i18n.changeLanguage(lng);
  }, [])

  const lng = navigator.language;

  // todo: fetch 1099s here, feed to table

  return (
    <>
      <Table striped fullWidth className="bg-primary-lighter" >
          <thead>
              <tr>
                  <th>{t('table1099.recipient')}</th>
                  <th>{t('table1099.payer')}</th>
                  <th>{t('table1099.totalCompensation')}</th>
                  <th>{t('table1099.dateSubmitted')}</th>
              </tr>
          </thead>
          <tbody>
              {/* {tableData.map((filed1099) =>

                (
                  <tr key={filed1099.form_1099_id}>
                      <td>{filed1099.form_1099_id}</td>
                      <td>{filed1099.user_id}</td>
                      <td>{filed1099.recipient_snn}</td>
                      <td>{filed1099.recipient_tin}</td>
                      <td>{filed1099.tax_filing_id}</td>
                      <td>{filed1099.payer_name}</td>
                      <td>{filed1099.payer_street1}</td>
                      <td>{filed1099.payer_street_2}</td>
                      <td>{filed1099.payer_city}</td>
                      <td>{filed1099.payer_state}</td>
                      <td>{filed1099.payer_zip}</td>
                      <td>{filed1099.payer_tin}</td>
                      <td>{filed1099.taxes_withheld2}</td>
                      <td>{filed1099.total_compensation}</td>
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