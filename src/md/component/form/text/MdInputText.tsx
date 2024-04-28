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
}

const MdInputText: React.FC<IMdInputTextProps> = memo(({ className, ...rest }) => {
  const { error } = useFormError(rest.name, rest.errors, rest.touched, rest.errorMessage);

  const handleKeyEnter = useCallback(
    (callback?: (values: IApiDto) => void) => (target: { name: string; value: string }) => {
      const values = {
        ...rest.values,
        [target.name]: target.value,
      };
      !rest.textarea && callback?.(values as IApiDto);
    },
    [rest.values, rest.textarea],
  );

  return (
    <div style={{ width: '100%' }} className={className ?? ''}>
      <MdInputTextSimple
        error={error !== ''}
        type={rest.type}
        label={rest.label}
        name={rest.name}
        value={rest.state?.[rest.name as keyof JSONObject] ?? ''}
        newValue={rest.values?.[rest.name as keyof JSONObject] ?? ''}
        required={rest.validationSchema?.[rest.name as keyof JSONObject]?.['required']}
        disabled={rest.validationSchema?.[rest.name as keyof JSONObject]?.['disabled']}
        fullWidth={rest.fullWidth}
        handleChange={rest.handleChange}
        handleBlur={rest.handleBlur}
        textarea={rest.textarea}
        handleKeyEnter={handleKeyEnter(rest.handleSubmit)}
      />

      <MdFormError error={error} />
    </div>
  );
});

MdInputText.defaultProps = {
  type: 'text',
  textarea: 0,
  fullWidth: true,
  className: '',
};

export default MdInputText;
