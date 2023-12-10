import { NgClass, NgFor, NgIf, NgStyle } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskCardComponent } from './task-card/task-card.component';
import {
  DragDropModule,
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Board } from '../../models/board.model';
import { Task } from '../../models/task.model';
import { MatDialog } from '@angular/material/dialog';
import { ViewTaskModalComponent } from '../modals/view-task-modal/view-task-modal.component';
import { TaskOption } from '../../models/modal.model';

@Component({
  selector: 'app-project-board',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    NgStyle,
    NgClass,
    TaskCardComponent,
    DragDropModule,
    ViewTaskModalComponent,
  ],
  templateUrl: './project-board.component.html',
  styleUrl: './project-board.component.scss',
})
export class ProjectBoardComponent {
  colors = ['#49C4E5', '#8471F2', '#67E2AE'];

  @Input() activeBoard!: Board | null;
  @Input() darkMode = false;
  @Output() columnAdd = new EventEmitter<void>();
  @Output() boardEdit = new EventEmitter<Board>();
  @Output() taskUpdate = new EventEmitter<{ task: Task; columnName: string }>();
  @Output() taskUpdateModal = new EventEmitter<Task>();
  @Output() taskDeleteModal = new EventEmitter<Task>();

  constructor(private dialog: MatDialog) {}

  drop(event: CdkDragDrop<Task[]>) {
    if (this.activeBoard) {
      if (event.previousContainer === event.container) {
        moveItemInArray(
          event.container.data,
          event.previousIndex,
          event.currentIndex,
        );

        this.boardEdit.emit(this.activeBoard);
      } else {
        transferArrayItem(
          event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex,
        );

        this.boardEdit.emit(this.activeBoard);
      }
    }
  }

  addColumn(): void {
    this.columnAdd.emit();
  }

  viewTask(readTask: Task): void {
    const dialogRef = this.dialog.open(ViewTaskModalComponent, {
      data: {
        task: readTask,
        columns: this.activeBoard?.columns,
        darkMode: this.darkMode,
      },
    });

    dialogRef.afterClosed().subscribe((result: TaskOption) => {
      if (result === TaskOption.Edit) {
        this.taskUpdateModal.emit(readTask);
      } else if (result === TaskOption.Delete) {
        this.taskDeleteModal.emit(readTask);
      } else {
        const updateTask = {
          task: dialogRef.componentInstance.data.task,
          columnName: dialogRef.componentInstance.activeStatus.name,
        };

        this.taskUpdate.emit(updateTask);
      }
    });
  }
}
