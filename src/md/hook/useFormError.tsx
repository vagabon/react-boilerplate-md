import { useEffect, useState } from 'react';
import { JSONObject } from '../../dto';

export const useFormError = (name: string, errors: JSONObject, touched: JSONObject, errorMessage: string) => {
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const currentName = name;
    const error = errors?.[currentName as keyof JSONObject] ?? '';
    if (error !== undefined && error !== '' && (touched[currentName as keyof JSONObject] || errorMessage !== '')) {
      setError(error);
    } else {
      setError('');
    }
  }, [errors, touched, name, errorMessage]);

  return { error };
};
