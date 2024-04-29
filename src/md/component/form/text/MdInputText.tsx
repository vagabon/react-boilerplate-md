import { memo, useCallback } from 'react';
import { IApiDto, JSONObject } from '../../../../dto/api/ApiDto';
import { IFormPropsDto } from '../../../../dto/form/FormDto';
import { useFormError } from '../../../hook/useFormError';
import MdFormError from '../MdFormError';
import MdInputTextSimple from './MdInputTextSimple';

export type FormInputType = 'date' | 'text' | 'number' | 'password' | 'email';

export interface IMdInputTextProps extends IFormPropsDto {
  className?: string;
  label: string;
  name: string;
  type?: 'date' | 'text' | 'number' | 'password' | 'email';
  textarea?: number;
  fullWidth?: boolean;
  callbackCopy?: (message: string, type: 'success' | 'error') => void;
}

const MdInputText: React.FC<IMdInputTextProps> = memo(
  ({ type = 'text', textarea = 0, fullWidth = true, className = '', ...rest }) => {
    const { error } = useFormError(rest.name, rest.errors, rest.touched, rest.errorMessage);

    const handleKeyEnter = useCallback(
      (callback?: (values: IApiDto) => void) => (target: { name: string; value: string }) => {
        const values = {
          ...rest.values,
          [target.name]: target.value,
        };
        !textarea && callback?.(values as IApiDto);
      },
      [rest.values, textarea],
    );

    return (
      <div style={{ width: '100%' }} className={className}>
        <MdInputTextSimple
          error={error !== ''}
          type={type}
          label={rest.label}
          name={rest.name}
          value={rest.state?.[rest.name as keyof JSONObject] ?? ''}
          newValue={rest.values?.[rest.name as keyof JSONObject] ?? ''}
          required={rest.validationSchema?.[rest.name as keyof JSONObject]?.['required']}
          disabled={rest.validationSchema?.[rest.name as keyof JSONObject]?.['disabled']}
          fullWidth={fullWidth}
          handleChange={rest.handleChange}
          handleBlur={rest.handleBlur}
          textarea={textarea}
          handleKeyEnter={handleKeyEnter(rest.handleSubmit)}
          callbackCopy={rest.callbackCopy}
        />

        <MdFormError error={error} />
      </div>
    );
  },
);

export default MdInputText;
