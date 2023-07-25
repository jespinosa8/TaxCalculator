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
              {/* {tableData.map((warehouse) =>

                (
                  <tr key={w2.id}>
                      <td>{w2.id}</td>
                      <td>{`${w2.firstName}${w2.middleName}${w2.lastName}`}</td>
                      <td>{w2.employerName}</td>
                      <td>{w2.wages}</td>
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