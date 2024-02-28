import { ChangeEvent, FocusEvent } from 'react';
import { IApiDto, JSONObject, JSONValue, Target } from '../api/ApiDto';

export type HandleChangeType = {
  (e: ChangeEvent<Target>): void;
  <T = string | ChangeEvent<Target>>(field: T): T extends ChangeEvent<Target>
    ? void
    : (e: string | ChangeEvent<Target>) => void;
};

export type HandleBlurType = {
  (e: FocusEvent<Target, Element>): void;
  <T = Target>(fieldOrEvent: T): T extends string ? (e: Target) => void : void;
};

export type SetFieldValueType = (
  field: string,
  value: JSONObject,
  shouldValidate?: boolean | undefined,
) => Promise<void>;

export type ValidateFormType = (values?: JSONObject) => Promise<JSONValue>;

export interface IFormPropsDto {
  values?: JSONObject;
  state?: JSONObject;
  errors?: JSONObject;
  touched?: JSONObject;
  validationSchema?: JSONObject;
  handleChange?: HandleChangeType;
  handleBlur?: HandleBlurType;
  handleSubmit?: (values: IApiDto) => void;
  validateForm?: ValidateFormType;
  setFieldValue?: SetFieldValueType;
  errorMessage?: string;
}

export interface IOrderDto extends IApiDto {
  libelle: string;
  orderAsc?: boolean;
}
