import { ChangeEvent, FocusEvent, KeyboardEvent, MouseEvent, useCallback, useEffect, useRef, useState } from 'react';
import { IApiDto, JSONObject, JSONValue } from '../../dto/api/ApiDto';
import { HandleBlurType, HandleChangeType } from '../../dto/form/FormDto';
import { ObjectUtils } from '../../utils/object/ObjectUtils';
import { UuidUtils } from '../../utils/uuid/UuidUtils';

export const useFormValue = (type: string, value: JSONValue, isFocus?: boolean) => {
  const [key, setKey] = useState<string>();
  const [defaultValue, setDefaultValue] = useState<JSONValue>('');
  const [liveValue, setLiveValue] = useState(value);

  const [readonly, setReadonly] = useState(type === 'password');
  const uref = useRef<HTMLInputElement>();
  const isFocusRef = useRef<boolean>(false);
  const [keyDown, setKeyDown] = useState<boolean>(false);

  useEffect(() => {
    isFocusRef.current = isFocus === true;
    if (isFocusRef.current) {
      uref.current?.focus();
    }
  }, [isFocus]);

  useEffect(() => {
    if (!isFocusRef.current) {
      setKey(UuidUtils.createUUID());
      let newValue = value;
      if (type === 'text') {
        newValue = newValue ? String(newValue).trim() : '';
      } else if (type === 'number' && !newValue) {
        newValue = 0;
      }
      setDefaultValue(newValue);
    }
  }, [type, value]);

  useEffect(() => {
    if (!isFocusRef.current) {
      setKey(UuidUtils.createUUID());
      setDefaultValue(liveValue);
    }
  }, [liveValue]);

  const handleFocus = useCallback(() => {
    isFocusRef.current = true;
    type === 'password' && setTimeout(() => setReadonly(false), 100);
  }, [type]);

  const handleChange = useCallback(
    (callback?: HandleChangeType) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const value = ObjectUtils.getDtoString(event.target, 'value');
      setLiveValue(value);
      callback?.(event);
    },
    [],
  );

  const handleBlur = useCallback(
    (changeValue?: (value: string) => string, callbackChange?: HandleChangeType, callback?: HandleBlurType) =>
      (event: FocusEvent<JSONObject, Element>) => {
        isFocusRef.current = false;
        let value = ObjectUtils.getDtoString(event.target, 'value');
        if (typeof value === 'string') {
          changeValue && (value = changeValue(value));
          value = value?.trim();
        }
        setLiveValue(value);
        const newEvent = {
          ...event,
          target: {
            ...event.target,
            name: ObjectUtils.getDtoString(event.target, 'name'),
            value,
          },
        };
        callbackChange?.(newEvent);
        callback?.(newEvent);
      },
    [],
  );

  const handleKeyDown = useCallback((event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Control') {
      setKeyDown(true);
    }
  }, []);

  const handleKeyUp = useCallback(
    (isTextArea: boolean, keyDown: boolean, callbackEnter?: (target: { name: string; value: string }) => void) =>
      (event: KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'Enter') {
          isFocusRef.current = false;
          const target = {
            name: ObjectUtils.getDtoString(event.target as IApiDto, 'name'),
            value: ObjectUtils.getDtoString(event.target as IApiDto, 'value'),
          };
          ((isTextArea && keyDown) || !isTextArea) && callbackEnter?.(target);
          setKeyDown(false);
        }
      },
    [],
  );

  const handleReset = useCallback(
    (callback?: () => void) => (event: MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation();
      event.preventDefault();
      isFocusRef.current = false;
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
    keyDown,
    handleKeyDown,
    handleKeyUp,
    handleReset,
  };
};
