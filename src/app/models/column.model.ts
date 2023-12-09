import { Task } from './task.model';

export interface Column {
  name: string;
  tasks: Task[];
}
