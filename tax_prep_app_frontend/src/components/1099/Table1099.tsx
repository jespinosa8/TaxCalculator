import { Table } from "@trussworks/react-uswds";
import { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import { getUser } from "../../slices/UserSlice";
import Delete1099 from "./Delete1099";
import Update1099 from "./Update1099";

export default function Table1099() {
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

  function handleUpdate1099() {
    setUser(getUser())
  }

  function handleDelete1099() {
    setUser(getUser())
  }

  return (
    <>
      <Table striped fullWidth className="bg-primary-lighter" >
        <thead>
          <tr>
            <th>{t('table1099.payer')}</th>
            <th>{t('table1099.totalCompensation')}</th>
            <th>{t('table1099.federalIncomeTaxWithheld')}</th>
            {/* <th>{t('table1099.dateSubmitted')}</th> */}
          </tr>
        </thead>
        <tbody>
          {user.form1099s.map((form1099, f) =>


            <tr key={f}>
              <td>{form1099.payerName}</td>
              <td>{formatCurrency(form1099.totalCompensation)}</td>
              <td>{formatCurrency(form1099.taxesWithheld2)}</td>
              {/* <td>{form1099.dateSubmitted}</td> */}
              {(user.taxFilings == null && <td style={{ width: "60px" }}>
                <Update1099 existingForm={form1099} indexOf1099ToUpdate={f} handleUpdate1099={handleUpdate1099}></Update1099>
              </td>
              )}
              {(user.taxFilings == null && <td style={{ width: "60px" }}>
                <Delete1099 indexOf1099ToDelete={f} handleDelete1099={handleDelete1099}></Delete1099>
              </td>
              )}
            </tr>
          )
          }
        </tbody>
      </Table>

    </>
  )
}