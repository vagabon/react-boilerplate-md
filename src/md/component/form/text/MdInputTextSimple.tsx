import { IconButton, InputProps, TextField, TextFieldVariants } from '@mui/material';
import { ClearIcon } from '@mui/x-date-pickers';
import { JSONValue } from '../../../../dto/api/ApiDto';
import { HandleBlurType, HandleChangeType } from '../../../../dto/form/FormDto';
import { useAppTranslate } from '../../../../translate';
import { I18nUtils } from '../../../../utils';
import { useFormValue } from '../../../hook/useFormValue';

const DEFAULT_TEXT = 'text';

export interface IMdInputTextSimpleProps {
  label: string;
  value: JSONValue;
  newValue?: JSONValue;
  name: string;
  variant?: TextFieldVariants;
  placeholder?: string;
  size?: 'small' | 'medium';
  type?: 'date' | 'text' | 'number' | 'password' | 'email';
  textarea?: number;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  fullWidth?: boolean;
  error?: boolean;
  inputProps?: Partial<InputProps>;
  handleChange?: HandleChangeType;
  handleBlur?: HandleBlurType;
  handleKeyEnter?: (target: { name: string; value: string }) => void;
  callbackReset?: () => void;
}

const MdInputTextSimple: React.FC<IMdInputTextSimpleProps> = ({ className = '', callbackReset, ...props }) => {
  const { t } = useAppTranslate();
  const {
    uref,
    key,
    liveValue,
    defaultValue,
    readonly,
    handleFocus,
    handleChange,
    handleBlur,
    handleKeyUp,
    handleReset,
  } = useFormValue(props.type ?? DEFAULT_TEXT, props.value, props.newValue);

  return (
    <div style={{ width: '100%' }}>
      <TextField
        autoFocus
        error={props.error}
        key={key}
        inputRef={uref}
        className={className}
        type={props.type}
        margin='normal'
        label={t(props.label)}
        variant={props.variant}
        placeholder={I18nUtils.translate(t, props.placeholder ?? '')}
        size={props.size}
        name={props.name}
        defaultValue={defaultValue}
        required={props.required}
        fullWidth={props.fullWidth}
        onFocus={handleFocus}
        onChange={handleChange(props.handleChange)}
        onBlur={handleBlur(props.handleBlur)}
        onKeyUp={handleKeyUp(props.handleKeyEnter)}
        InputProps={{
          ...props.inputProps,
          endAdornment: callbackReset && (
            <IconButton
              sx={{ visibility: liveValue !== '' ? 'visible' : 'hidden' }}
              onMouseDown={handleReset(callbackReset)}>
              <ClearIcon />
            </IconButton>
          ),
          autoComplete: 'off',
          readOnly: readonly,
        }}
        multiline={(props.textarea ?? 0) > 0}
        disabled={props.disabled}
        rows={props.textarea}></TextField>
    </div>
  );
};

MdInputTextSimple.defaultProps = {
  type: DEFAULT_TEXT,
  textarea: 0,
  required: false,
  fullWidth: true,
  className: '',
};

export default MdInputTextSimple;
