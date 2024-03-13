import { useCallback } from 'react';
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

const MdInputText: React.FC<IMdInputTextProps> = ({ className = '', ...props }) => {
  const { error } = useFormError(props.name, props.errors, props.touched, props.errorMessage);

  const handleKeyEnter = useCallback(
    (callback?: (values: IApiDto) => void) => (target: { name: string; value: string }) => {
      const values = {
        ...props.values,
        [target.name]: target.value,
      };
      !props.textarea && callback?.(values as IApiDto);
    },
    [props.values, props.textarea],
  );

  return (
    <div style={{ width: '100%' }} className={className}>
      <MdInputTextSimple
        error={error !== ''}
        type={props.type}
        label={props.label}
        name={props.name}
        value={props.state?.[props.name as keyof JSONObject] ?? ''}
        newValue={props.values?.[props.name as keyof JSONObject] ?? ''}
        required={props.validationSchema?.[props.name as keyof JSONObject]?.['required']}
        disabled={props.validationSchema?.[props.name as keyof JSONObject]?.['disabled']}
        fullWidth={props.fullWidth}
        handleChange={props.handleChange}
        handleBlur={props.handleBlur}
        textarea={props.textarea}
        handleKeyEnter={handleKeyEnter(props.handleSubmit)}
      />

      <MdFormError error={error} />
    </div>
  );
};

MdInputText.defaultProps = {
  type: 'text',
  textarea: 0,
  fullWidth: true,
  className: '',
};

export default MdInputText;
