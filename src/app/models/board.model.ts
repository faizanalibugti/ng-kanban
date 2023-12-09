import { Column } from './column.model';

export interface Board {
  name: string;
  columns: Column[];
}
