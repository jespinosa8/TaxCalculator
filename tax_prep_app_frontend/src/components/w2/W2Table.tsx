import { Table } from "@trussworks/react-uswds";
import SubmitDate from "./SubmitDate";


export default function W2Table () {


  return (
    <>
              <Table striped fullWidth className="bg-primary-lighter" >
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Employer</th>
                        <th>Total Income</th>
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