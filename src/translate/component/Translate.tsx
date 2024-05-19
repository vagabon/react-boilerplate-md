import { Trans, useTranslation } from 'react-i18next';
import { JSONObject } from '../../dto/api/ApiDto';

export interface ITranslateProps {
  i18nKey?: string;
  values?: JSONObject;
  components?: readonly React.ReactElement[] | { readonly [tagName: string]: React.ReactElement };
}

export const Translate: React.FC<ITranslateProps> = ({ values, components, ...rest }) => {
  const { i18n } = useTranslation();

  return <Trans {...rest} i18n={i18n} values={values} components={components} />;
};
