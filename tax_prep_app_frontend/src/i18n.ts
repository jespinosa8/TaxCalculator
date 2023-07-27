

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          link: {
            home: "Home",
            taxSummary: "Tax Summary",
            generalTaxInformation: "Add General Tax Information",
            addW2: "Add W2",
            add1099: "Add 1099",
            personalInformation: "Personal Information",
            logOut: "Log Out"
          },
          w2Table: {
            employee: "Employee",
            employer: "Employer",
            totalIncome: "Total Income",
            dateSubmitted: "Date Submitted"
          },
          w2Form: {
            taxStatement: "Form W-2 Wage and Tax Statement",
            apt: "Apt., Unit, Ste",
            state: "State",
            city: "City",
            employerName: "Employer's Name",
            streetAddress: "Street Address",
            employerCity: "City",
            employerState: "State",
            employerZip: "Zip Code",
            employerEin: "Employer EIN",
            employerInformationLabel: "Employer Information",
            federalIncomeTaxWithheld: "Federal Income Tax Withheld",
            socialSecurityTaxWithheld: "Social Security Tax Withheld",
            medicareTaxWithheld: "Medicare Tax Withheld",
            wagesTipsOtherCompensation: "Wages, Tips and other Compensation",
            submit: "Submit"
          },
          form1099: {
           title: "Non-Employee Compensation Form 1099-NEC",
           payersInformation: "Payer's Information",
           payersName: "Payer's Name",
           payersAddress: "Payer's Address",
           payersAddress2: "Payer's Address 2",
           payersCity: "Payer's City",
           payersState: "Payer's State",
           payersTin: "Payer's TIN",
           federalIncomeTaxWithheld: "Federal Income Tax Withheld",
           nonemployeeCompensation: "Non-Employee Compensation",
           submit: "Submit",  
          },
          table1099: {
            recipient: "Recipient",
            payer: "Payer",
            totalCompensation: "Total Compensation",
            dateSubmitted: "Date Submitted"
          }
        }
      },
      es: {
        translation: {
          link: {
            home: "Página Principal",
            taxSummary: "Resumen de Impuestos",
            generalTaxInformation: "Información Fiscal General",
            addW2: "Agregar W2",
            add1099: "Agregar 1099",
            personalInformation: "Información Personal",
            logOut: "Cerrar Sesión"
          },
          w2Table: {
            employee: "Empleado",
            employer: "Empleador",
            totalIncome: "Ingresos Totales",
            dateSubmitted: "Fecha Enviado"
          },
          w2Form: {
            taxStatement: "Formulario W-2 Declaración de Salarios e Impuestos",
            apt: "Apartamento, Unidad, Suite",
            state: "Estado",
            city: "Ciudad",
            employerName: "Nombre del Empleador",
            streetAddress: "Dirección",
            employerCity: "Ciudad",
            employerState: "Estado",
            employerZip: "Código Postal",
            employerEin: "EIN del Empleador",
            employerInformationLabel: "Información del Empleador",
            federalIncomeTaxWithheld: "Impuesto Federal sobre la Renta Retenido",
            socialSecurityTaxWithheld: "Impuesto del Seguro Social retenido",
            medicareTaxWithheld: "Retención de impuestos de Medicare",
            wagesTipsOtherCompensation: "Salarios, Propinas y otras Compensaciones",
            submit: "Entregar"
          },
          form1099: {
            title: "Formulario de Compensación para No Empleados 1099-NEC",
            payersInformation: "Información del Pagador",
            payersName: "Nombre del Pagador",
            payersAddress: "Dirección del Pagador",
            payersAddress2: "Dirección del Pagador 2",
            payersCity: "Ciudad del Pagador",
            payersState: "Estado del Pagador",
            payersTin: "TIN del Pagador",
            federalIncomeTaxWithheld: "Impuesto Federal sobre la Renta Retenido",
            nonemployeeCompensation: "Compensación de No Empleados",
            submit: "Entregar",
          },
          table1099: {
            recipient: "Destinatario(a)",
            payer: "Pagador",
            totalCompensation: "Compensación Total",
            dateSubmitted: "Fecha Enviado"
          }
        }
      }
    }
  });

export default i18n;
