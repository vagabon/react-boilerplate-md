import { IApiDto } from '../api/ApiDto';

export interface IListDto extends IApiDto {
  libelle: string;
}

export type ListType = { id: string | number; name: string };
