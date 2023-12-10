import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RouterOutlet } from '@angular/router';
import { BoardModalComponent } from './components/modals/board-modal/board-modal.component';
import { DeleteModalComponent } from './components/modals/delete-modal/delete-modal.component';
import { TaskModalComponent } from './components/modals/task-modal/task-modal.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProjectBoardComponent } from './components/project-board/project-board.component';
import { SidebarToggleComponent } from './components/sidebar-toggle/sidebar-toggle.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ThemeTogglerComponent } from './components/sidebar/theme-toggler/theme-toggler.component';
import { Board } from './models/board.model';
import { Task } from './models/task.model';
import { BoardDataService } from './services/board-data/board-data.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    SidebarComponent,
    ThemeTogglerComponent,
    NavbarComponent,
    ProjectBoardComponent,
    SidebarToggleComponent,
    BoardModalComponent,
    DeleteModalComponent,
    TaskModalComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  darkMode = false;

  isSidebarOpen = true;

  boards = this.boardDataService.boards;

  activeBoard = this.boardDataService.activeBoard;

  currentIdx = this.boardDataService.currentIdx;

  constructor(
    private dialog: MatDialog,
    private boardDataService: BoardDataService,
  ) {}

  ngOnInit(): void {
    this.boardDataService.getBoards();
  }

  selectBoard(boardIdx: number) {
    this.boardDataService.selectBoard(boardIdx);
  }

  toggleDarkMode(enableDarkMode: boolean) {
    this.darkMode = enableDarkMode;
  }

  openSideBar(): void {
    this.isSidebarOpen = true;
  }

  closeSidebar() {
    this.isSidebarOpen = false;
  }

  addBoard(): void {
    const dialogRef = this.dialog.open(BoardModalComponent, {
      data: { board: { name: '', columns: [] }, darkMode: this.darkMode },
    });

    dialogRef.afterClosed().subscribe((res: Board) => {
      if (!res) {
        return;
      }

      this.boardDataService.addBoard(res);
    });
  }

  editBoard(): void {
    const dialogRef = this.dialog.open(BoardModalComponent, {
      data: {
        board: this.activeBoard() ? this.activeBoard() : { name: '', columns: [] },
        darkMode: this.darkMode,
      },
    });

    dialogRef.afterClosed().subscribe((res: Board) => {
      if (!res) {
        return;
      }

      this.boardDataService.editBoard(res);
    });
  }

  updateBoardAfterTaskReorder(updateBoard: Board) {
    this.boardDataService.editBoard(updateBoard);
  }

  deleteBoard(): void {
    const dialogRef = this.dialog.open(DeleteModalComponent, {
      data: {
        name: this.activeBoard()?.name,
        isBoard: true,
        darkMode: this.darkMode,
      },
    });

    dialogRef.afterClosed().subscribe((success: boolean) => {
      if (!success) {
        return;
      }

      this.boardDataService.deleteBoard();
    });
  }

  addTask(): void {
    const dialogRef = this.dialog.open(TaskModalComponent, {
      data: {
        editMode: false,
        darkMode: this.darkMode,
        columns: this.activeBoard()?.columns,
      },
    });

    dialogRef.afterClosed().subscribe((res: Task) => {
      if (!res) {
        return;
      }

      this.boardDataService.addTask(res);
    });
  }

  editTask(editTask: Task): void {
    const dialogRef = this.dialog.open(TaskModalComponent, {
      data: {
        task: editTask,
        editMode: true,
        darkMode: this.darkMode,
        columns: this.activeBoard()?.columns,
      },
    });

    dialogRef.afterClosed().subscribe((res: Task) => {
      if (!res) {
        return;
      }

      this.updateTask({ task: res, columnName: res.status });
    });
  }

  updateTask(updateTask: { task: Task; columnName: string }) {
    this.boardDataService.updateTask(updateTask);
  }

  deleteTask(deleteTask: Task): void {
    const dialogRef = this.dialog.open(DeleteModalComponent, {
      data: {
        name: deleteTask.title,
        isBoard: false,
        darkMode: this.darkMode,
      },
    });

    dialogRef.afterClosed().subscribe((success: boolean) => {
      if (!success) {
        return;
      }

      this.boardDataService.deleteTask(deleteTask);
    });
  }
}
