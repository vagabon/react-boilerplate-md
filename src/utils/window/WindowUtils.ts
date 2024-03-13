import { JSONObject } from '../../dto';

export const WindowUtils = {
  getEnv: (name: string | JSONObject) => {
    return (window?.['ENV' as keyof Window]?.[name as keyof Window] as unknown as string | JSONObject) ?? 'NOT_FOUND';
  },
};
