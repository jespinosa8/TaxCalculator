

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
            ssWithheld: "Social Security Withheld",
            taxesWithheld: "Taxes Withheld",
            medicareWithheld: "Medicare Withheld",
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
            wagesTipsOtherCompensation: "Wages, Tips, and other Compensation",
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
           payersZip: "Payer's ZIP",
           federalIncomeTaxWithheld: "Federal Income Tax Withheld",
           nonemployeeCompensation: "Non-Employee Compensation",
           submit: "Submit",  
          },
          table1099: {
            recipient: "Recipient",
            payer: "Payer",
            totalCompensation: "Total Compensation",
            federalIncomeTaxWithheld: "Federal Income Tax Withheld",
            dateSubmitted: "Date Submitted"
          },
          personalInformationForm: {
            title: "Personal Information",
            username: "Username",
            name: "Name",
            email: "Email",
            socialSecurity: "Social Security Number",
            dob: "Date of Birth",
            address1: "Address Line 1",
            address2: "Address Line 2",
            city: "City",
            state: "State",
            zip: "Zip",
            country: "Country",
            updateInformation: "Update Information"
          },
          taxSummary: {
            notSubmittedTaxes1: "You have not submitted your taxes yet!",
            notSubmittedTaxes2: "Please navigate to the home page to begin the tax filing process."
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
            ssWithheld: "Seguro Social Retenido",
            taxesWithheld: "Impuestos Retenidos",
            medicareWithheld: "Medicare Retenido",
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
            payersZip: "Código Postal del Pagador",
            federalIncomeTaxWithheld: "Impuesto Federal sobre la Renta Retenido",
            nonemployeeCompensation: "Compensación de No Empleados",
            submit: "Entregar",
          },
          table1099: {
            recipient: "Destinatario(a)",
            payer: "Pagador",
            totalCompensation: "Compensación Total",
            federalIncomeTaxWithheld: "Impuesto Federal Sobre la Renta Retenido",
            dateSubmitted: "Fecha Enviado"
          },
          personalInformationForm: {
            title: "Información Personal",
            username: "Nombre de Usuario",
            name: "Nombre",
            email: "Correo Electrónico",
            socialSecurity: "Número de Seguro Social",
            dob: "Fecha de Nacimiento",
            address1: "Dirección Línea 1",
            address2: "Dirección Línea 2",
            city: "Ciudad",
            state: "Estado",
            zip: "Código Postal",
            country: "País",
            updateInformation: "Actualizar Información"
          },
          taxSummary: {
            notSubmittedTaxes1: "¡Aún no ha presentado sus impuestos!",
            notSubmittedTaxes2: "Por favor, vaya a la página de inicio para comenzar el proceso de presentación de impuestos."
          }
        }
      }
    }
  });

export default i18n;
