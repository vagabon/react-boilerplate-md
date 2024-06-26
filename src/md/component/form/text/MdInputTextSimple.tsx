import { Clear as ClearIcon } from '@mui/icons-material';
import { IconButton, InputProps, TextField, TextFieldVariants } from '@mui/material';
import { memo, useCallback } from 'react';
import { JSONValue } from '../../../../dto/api/ApiDto';
import { HandleBlurType, HandleChangeType } from '../../../../dto/form/FormDto';
import { IconClickable } from '../../../../icon/component/IconClickable';
import { useTranslate } from '../../../../translate/hook/useTranslate';
import { useFormValue } from '../../../hook/useFormValue';

const DEFAULT_TEXT = 'text';

export interface IMdInputTextSimpleProps {
  label?: string;
  value: JSONValue;
  name: string;
  variant?: TextFieldVariants;
  placeholder?: string;
  size?: 'small' | 'medium';
  type?: 'date' | 'text' | 'number' | 'password' | 'email';
  textarea?: number;
  required?: boolean;
  disabled?: boolean;
  isFocus?: boolean;
  className?: string;
  fullWidth?: boolean;
  error?: boolean;
  inputProps?: Partial<InputProps>;
  handleChange?: HandleChangeType;
  handleBlur?: HandleBlurType;
  handleKeyEnter?: (target: { name: string; value: string }) => void;
  callbackReset?: () => void;
  callbackCopy?: (message: string, type: 'success' | 'error') => void;
  changeValue?: (value: string) => string;
}

export const MdInputTextSimple: React.FC<IMdInputTextSimpleProps> = memo(
  ({
    type = DEFAULT_TEXT,
    textarea = 0,
    required = false,
    fullWidth = true,
    className = '',
    callbackReset,
    callbackCopy,
    ...rest
  }) => {
    const { translate } = useTranslate();
    const {
      uref,
      key,
      liveValue,
      defaultValue,
      readonly,
      handleFocus,
      handleChange,
      handleBlur,
      handleKeyDown,
      handleKeyUp,
      handleReset,
    } = useFormValue(type, rest.value, rest.isFocus);

    const handleCopy = useCallback(() => {
      navigator.clipboard.writeText('' + liveValue);
      callbackCopy?.('TEXT_COPY', 'success');
    }, [liveValue, callbackCopy]);

    return (
      <div className='relative width100'>
        {callbackCopy && liveValue && <IconClickable className='input-copy-button' icon='copy' callback={handleCopy} />}
        <TextField
          error={rest.error}
          key={key}
          inputRef={uref}
          className={className}
          type={type}
          margin='normal'
          label={rest.label ? translate(rest.label) : ''}
          variant={rest.variant}
          placeholder={translate(rest.placeholder ?? '')}
          size={rest.size}
          name={rest.name}
          defaultValue={defaultValue}
          required={required}
          fullWidth={fullWidth}
          onFocus={handleFocus}
          onChange={handleChange(rest.handleChange)}
          onBlur={handleBlur(rest.changeValue, rest.handleChange, rest.handleBlur)}
          onKeyDown={handleKeyDown}
          onKeyUp={handleKeyUp(textarea > 0, rest.handleKeyEnter)}
          InputProps={{
            ...rest.inputProps,
            endAdornment: callbackReset && (
              <IconButton className={liveValue !== '' ? '' : 'hidden'} onMouseDown={handleReset(callbackReset)}>
                <ClearIcon />
              </IconButton>
            ),
            autoComplete: 'off',
            readOnly: readonly,
          }}
          multiline={(textarea ?? 0) > 0}
          disabled={rest.disabled}
          minRows={textarea}></TextField>
      </div>
    );
  },
);
