import { default as i18n } from 'i18next';
import { default as LanguageDetector } from 'i18next-browser-languagedetector';
import { Trans, initReactI18next, useTranslation } from 'react-i18next';

export const useAppTranslate = () => {
  const { t } = useTranslation();

  return { t, Trans, i18n, LanguageDetector, initReactI18next };
};
