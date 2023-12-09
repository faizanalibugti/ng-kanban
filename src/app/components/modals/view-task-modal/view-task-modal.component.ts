import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { Column } from '../../../models/column.model';
import { TaskOption } from '../../../models/modal.model';
import { SubTask } from '../../../models/subTask.model';
import { Task } from '../../../models/task.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-view-task-modal',
  standalone: true,
  imports: [NgFor, NgClass, NgIf, MatMenuModule, FormsModule],
  templateUrl: './view-task-modal.component.html',
  styleUrl: './view-task-modal.component.scss',
})
export class ViewTaskModalComponent implements OnInit {
  activeStatus!: Column;

  constructor(
    private dialogRef: MatDialogRef<ViewTaskModalComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: { task: Task; darkMode: boolean; columns: Column[] },
  ) {}

  ngOnInit(): void {
    this.activeStatus = this.data.columns
      .map(
        (column) =>
          ({
            ...column,
            tasks: column.tasks.filter(
              (task) => task.title === this.data.task.title,
            ),
          }) as Column,
      )
      .filter((column) => column.tasks.length > 0)[0];
  }

  updateSubtask(updateSubtask: SubTask): void {
    this.data.task = {
      ...this.data.task,
      subtasks: this.data.task.subtasks.map((subtask) =>
        subtask === updateSubtask
          ? { ...subtask, isCompleted: !subtask.isCompleted }
          : subtask,
      ),
    };
  }

  updateStatus(event: Event) {
    const columnName = (event.target as HTMLSelectElement).value;

    this.data.task = {
      ...this.data.task,
      status: columnName,
    };

    this.activeStatus = this.data.columns.filter(
      (column) => column.name === columnName,
    )[0];
  }

  calculateCompleted(subtasks: SubTask[]): number {
    return subtasks.filter((subtask) => subtask.isCompleted).length;
  }

  editTask(): void {
    this.dialogRef.close(TaskOption.Edit);
  }

  deleteTask(): void {
    this.dialogRef.close(TaskOption.Delete);
  }
}
