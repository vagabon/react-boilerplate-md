import { IApiDto, ID, JSONObject } from '../../dto/api/ApiDto';
import { DateUtils } from '../date/DateUtils';

export const ObjectUtils = {
  capitalize(name?: string) {
    return name && name?.length > 1 ? name[0].toUpperCase() + name.slice(1) : name?.[0].toUpperCase() ?? '';
  },
  toLowerCase(name?: string) {
    return name?.toLowerCase() ?? '';
  },
  toUpperCase(name?: string) {
    return name?.toUpperCase() ?? '';
  },
  toNumberFormat(value: string | number) {
    return new Intl.NumberFormat().format(parseInt(value.toString()))?.replace(/,/g, ' ');
  },
  toNumberShot: (nb?: number) => {
    const nbShort = nb ?? 0;
    if (nbShort / 1000000000 >= 1) {
      return ((nbShort / 1000000000).toFixed(2) + 'MM').replace('.', ',');
    }
    if (nbShort / 1000000 >= 1) {
      return ((nbShort / 1000000).toFixed(2) + 'M').replace('.', ',');
    }
    if (nbShort / 100000 >= 1) {
      return ((nbShort / 1000).toFixed(0) + 'K').replace('.', ',');
    }
    if (nbShort / 1000 >= 1) {
      return (nbShort / 1000).toFixed(2).replace('.', 'K');
    }
    return String(nb);
  },
  getDtoValue: (data: IApiDto | JSONObject, name: string) => {
    return data?.[name as keyof (IApiDto | JSONObject)] ?? '';
  },
  getDtoString: (data: IApiDto | JSONObject, name: string) => {
    return ObjectUtils.getDtoValue(data, name) as string;
  },
  getRecursivValue: (data: JSONObject, name: string, isDate: boolean = false) => {
    let value = data;
    const splits = name.split('.');
    splits.forEach((split) => {
      if (Array.isArray(value)) {
        value = (value as JSONObject[])?.map((data) => data[split as keyof JSONObject]).join(',') as JSONObject;
      } else {
        value = value?.[split as keyof JSONObject] ?? '';
      }
    });
    return isDate ? DateUtils.format(value as string, 'DD-MM-YYYY hhhmm') : String(value);
  },
  compareId: (id1: ID, id2: ID) => {
    if (!Number.isInteger(id1 ?? '')) {
      return id1?.toString() === id2?.toString();
    }
    return parseInt(id1?.toString() ?? '') === parseInt(id2?.toString() ?? '');
  },
  addOrReplace: <T,>(entities: T[], field: string, field2: string, payload: T): T[] => {
    let datas = [...(entities as JSONObject[])];
    const find = datas.find((data) =>
      ObjectUtils.compareId(data[field as keyof JSONObject], payload[field as keyof JSONObject]),
    );
    if (!find) {
      datas.push({ [field]: payload[field as keyof JSONObject], [field2]: payload[field2 as keyof JSONObject] });
    } else {
      datas = datas.map((data) =>
        ObjectUtils.compareId(data[field as keyof JSONObject], payload[field as keyof JSONObject])
          ? { [field]: payload[field as keyof JSONObject], [field2]: payload[field2 as keyof JSONObject] }
          : data,
      );
    }
    return datas as T[];
  },
};
