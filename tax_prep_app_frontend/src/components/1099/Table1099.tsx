import { Table } from "@trussworks/react-uswds";


export default function Table1099 () {


  return (
    <>
      <Table striped fullWidth className="bg-primary-lighter" >
          <thead>
              <tr>
                  <th>Recipient</th>
                  <th>Payer</th>
                  <th>Total Compensation</th>
                  <th>Date Submitted</th>
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