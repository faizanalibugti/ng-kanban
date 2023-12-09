import { SubTask } from './subTask.model';

export interface Task {
  title: string;
  description: string;
  status: string;
  subtasks: SubTask[];
}
