import { IconButton, InputProps, TextField, TextFieldVariants } from '@mui/material';
import { ClearIcon } from '@mui/x-date-pickers';
import { memo } from 'react';
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

const MdInputTextSimple: React.FC<IMdInputTextSimpleProps> = memo(({ className, callbackReset, ...rest }) => {
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
    keyDown,
    handleKeyDown,
    handleKeyUp,
    handleReset,
  } = useFormValue(rest.type ?? DEFAULT_TEXT, rest.value, rest.newValue);

  return (
    <div style={{ width: '100%' }}>
      <TextField
        error={rest.error}
        key={key}
        inputRef={uref}
        className={className ?? ''}
        type={rest.type}
        margin='normal'
        label={t(rest.label)}
        variant={rest.variant}
        placeholder={I18nUtils.translate(t, rest.placeholder ?? '')}
        size={rest.size}
        name={rest.name}
        defaultValue={defaultValue}
        required={rest.required}
        fullWidth={rest.fullWidth}
        onFocus={handleFocus}
        onChange={handleChange(rest.handleChange)}
        onBlur={handleBlur(rest.handleBlur)}
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp((rest.textarea ?? 0) > 0, keyDown, rest.handleKeyEnter)}
        InputProps={{
          ...rest.inputProps,
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
        multiline={(rest.textarea ?? 0) > 0}
        disabled={rest.disabled}
        minRows={rest.textarea}></TextField>
    </div>
  );
});

MdInputTextSimple.defaultProps = {
  type: DEFAULT_TEXT,
  textarea: 0,
  required: false,
  fullWidth: true,
  className: '',
};

export default MdInputTextSimple;
