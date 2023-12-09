import { Component, Input } from '@angular/core';
import { Task } from '../../../models/task.model';
import { SubTask } from '../../../models/subTask.model';

@Component({
  selector: 'app-task-card',
  standalone: true,
  imports: [],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.scss',
})
export class TaskCardComponent {
  @Input() task!: Task;

  calculateCompleted(subtasks: SubTask[]): number {
    return subtasks.filter((s) => s.isCompleted).length;
  }
}
