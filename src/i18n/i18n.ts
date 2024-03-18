import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';

import {Language} from './const';
import {vi} from './locales/vi';
import {en} from './locales/en';
import {cn} from './locales/cn';

const langResource = {
  vi: {translation: vi},
  en: {translation: en},
  zh: {translation: cn},
};

i18next.use(initReactI18next).init({
  lng: Language.VietNam,
  resources: langResource,
  compatibilityJSON: 'v3',
});

const changLanguage = (language: any) => i18next.changeLanguage(language);

export const i18nextService = {
  changLanguage,
  i18next,
};
