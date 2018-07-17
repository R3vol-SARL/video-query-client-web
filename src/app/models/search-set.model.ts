import { IPagination } from './pagination';

export interface ISearchSetResponse {
  results: ISearchSet[];
  pagination: IPagination;
}

export interface ISearchSet  {
  id: number;
  name: string;
  duration: number;
  useDynamicTargetAdjustment: boolean;

  /**
   * Collection of FKs
   */
  videos?: number[];
}
