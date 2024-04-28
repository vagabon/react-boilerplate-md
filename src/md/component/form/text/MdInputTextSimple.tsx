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

const MdInputTextSimple: React.FC<IMdInputTextSimpleProps> = memo(
  ({
    type = DEFAULT_TEXT,
    textarea = 0,
    required = false,
    fullWidth = true,
    className = '',
    callbackReset,
    ...rest
  }) => {
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
    } = useFormValue(type, rest.value, rest.newValue);

    return (
      <div style={{ width: '100%' }}>
        <TextField
          error={rest.error}
          key={key}
          inputRef={uref}
          className={className}
          type={type}
          margin='normal'
          label={t(rest.label)}
          variant={rest.variant}
          placeholder={I18nUtils.translate(t, rest.placeholder ?? '')}
          size={rest.size}
          name={rest.name}
          defaultValue={defaultValue}
          required={required}
          fullWidth={fullWidth}
          onFocus={handleFocus}
          onChange={handleChange(rest.handleChange)}
          onBlur={handleBlur(rest.handleBlur)}
          onKeyDown={handleKeyDown}
          onKeyUp={handleKeyUp(textarea > 0, keyDown, rest.handleKeyEnter)}
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
          multiline={(textarea ?? 0) > 0}
          disabled={rest.disabled}
          minRows={textarea}></TextField>
      </div>
    );
  },
);

export default MdInputTextSimple;
