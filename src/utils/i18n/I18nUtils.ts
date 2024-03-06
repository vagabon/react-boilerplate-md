import { Namespace, TFunction } from 'i18next';
import { JSONObject } from '../../dto';

export type I18nTranslate = TFunction<Namespace, string>;

export const I18nUtils = {
  translate(t: I18nTranslate, libelle: string, data?: string | JSONObject): string {
    return (data ? t(libelle, data as string) : t(libelle)) ?? '';
  },
};
