

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
          }
        }
      }
    }
  });

export default i18n;
