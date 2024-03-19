import { ChangeEvent, FocusEvent, KeyboardEvent, MouseEvent, useCallback, useEffect, useRef, useState } from 'react';
import { IApiDto, JSONObject, JSONValue } from '../../dto/api/ApiDto';
import { HandleBlurType, HandleChangeType } from '../../dto/form/FormDto';
import { ObjectUtils } from '../../utils';
import { UuidUtils } from '../../utils/uuid/UuidUtils';

export const useFormValue = (type: string, value: JSONValue, newValue?: JSONValue) => {
  const [key, setKey] = useState<string>();
  const [defaultValue, setDefaultValue] = useState<JSONValue>('');
  const [liveValue, setLiveValue] = useState(value);

  const [readonly, setReadonly] = useState(type === 'password');
  const uref = useRef<HTMLInputElement>();
  const isFocusRef = useRef<boolean>(false);

  useEffect(() => {
    setKey(UuidUtils.createUUID());
    setDefaultValue(value);
    if (isFocusRef.current === true) {
      setTimeout(() => {
        uref?.current?.focus();
      }, 100);
    }
  }, [value]);

  useEffect(() => {
    if (newValue && isFocusRef.current === false) {
      setKey(UuidUtils.createUUID());
      setDefaultValue(newValue);
    }
  }, [newValue]);

  const handleFocus = useCallback(() => {
    isFocusRef.current = true;
    type === 'password' && setTimeout(() => setReadonly(false), 100);
  }, [type]);

  const handleChange = useCallback(
    (callback?: HandleChangeType) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setLiveValue(ObjectUtils.getDtoString(event.target, 'value'));
      callback?.(event);
    },
    [],
  );

  const handleBlur = useCallback(
    (callback?: HandleBlurType) => (event: FocusEvent<JSONObject, Element>) => {
      callback?.(event);
      isFocusRef.current = false;
    },
    [],
  );

  const handleKeyUp = useCallback(
    (callbackEnter?: (target: { name: string; value: string }) => void) => (event: KeyboardEvent<HTMLDivElement>) => {
      if (event.key === 'Enter') {
        const target = {
          name: ObjectUtils.getDtoString(event.target as IApiDto, 'name'),
          value: ObjectUtils.getDtoString(event.target as IApiDto, 'value'),
        };
        callbackEnter?.(target);
      }
    },
    [],
  );

  const handleReset = useCallback(
    (callback?: () => void) => (event: MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation();
      event.preventDefault();
      setKey(UuidUtils.createUUID());
      setDefaultValue('');
      setLiveValue('');
      callback?.();
    },
    [],
  );

  return {
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
  };
};
