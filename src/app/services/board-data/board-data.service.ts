import { isPlatformBrowser } from '@angular/common';
import {
  Inject,
  Injectable,
  PLATFORM_ID,
  computed,
  effect,
  signal,
} from '@angular/core';
import { Board } from '../../models/board.model';
import { Task } from '../../models/task.model';
import { BoardHttpService } from '../board-http/board-http.service';

@Injectable({
  providedIn: 'root',
})
export class BoardDataService {
  boards = signal<Board[]>([]);

  currentIdx = signal(0);

  activeBoard = computed(() =>
    this.boards().length > 0 ? this.boards()[this.currentIdx()] : null,
  );

  private saveBoards = effect(() => {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('boards', JSON.stringify(this.boards()));
    }
  });

  constructor(
    private boardHttp: BoardHttpService,
    @Inject(PLATFORM_ID) private platformId: object,
  ) {}

  getBoards(): void {
    let userBoards!: Board[] | null;

    if (isPlatformBrowser(this.platformId)) {
      userBoards = JSON.parse(localStorage.getItem('boards') as string) as
        | Board[]
        | null;
    }

    if (userBoards) {
      this.boards.set(userBoards);
    } else {
      this.boardHttp
        .getBoards()
        .subscribe((res) => this.boards.set(res.boards));
    }
  }

  selectBoard(boardIdx: number) {
    this.currentIdx.set(boardIdx);
  }

  addBoard(board: Board): void {
    this.boards.update((boards) => [...boards, board]);

    this.selectBoard(this.boards().length - 1);
  }

  editBoard(updatedBoard: Board) {
    this.boards.update((boards) =>
      boards.map((board) =>
        board === this.activeBoard() ? { ...updatedBoard } : board,
      ),
    );
  }

  deleteBoard() {
    this.boards.update((boards) =>
      boards.filter((board) => board !== this.activeBoard()),
    );

    if (this.boards().length >= 1) {
      this.selectBoard(0);
    }
  }

  addTask(task: Task) {
    this.boards.update((boards) =>
      boards.map((board) =>
        board === this.activeBoard()
          ? {
              ...board,
              columns: board.columns.map((column) => ({
                ...column,
                tasks:
                  column.name === task.status
                    ? [...column.tasks, task]
                    : column.tasks,
              })),
            }
          : board,
      ),
    );
  }

  updateTask(updateTask: { task: Task; columnName: string }) {
    const currentColumnName = this.activeBoard()
      ?.columns.map((column) => ({
        ...column,
        tasks: column.tasks.filter(
          (task) => task.title === updateTask.task.title,
        ),
      }))
      .filter((column) => column.tasks.length > 0)
      .map((column) => column.name)[0];

    this.boards.update((boards) =>
      boards.map((board) => {
        if (board === this.activeBoard()) {
          if (currentColumnName === updateTask.columnName) {
            // Update same column with updated task
            return {
              ...board,
              columns: board.columns.map((column) => ({
                ...column,
                tasks: column.tasks.map((task) =>
                  task.title === updateTask.task.title
                    ? { ...updateTask.task }
                    : task,
                ),
              })),
            };
          } else {
            // remove task from current column
            return {
              ...board,
              columns: board.columns.map((column) => {
                if (column.name === updateTask.columnName) {
                  return {
                    ...column,
                    tasks: [...column.tasks, updateTask.task],
                  };
                } else if (column.name === currentColumnName) {
                  return {
                    ...column,
                    tasks: column.tasks.filter(
                      (task) => task.title !== updateTask.task.title,
                    ),
                  };
                } else {
                  return column;
                }
              }),
            };
          }
        } else {
          return board;
        }
      }),
    );
  }

  deleteTask(deleteTask: Task) {
    this.boards.update((boards) =>
      boards.map((board) =>
        board === this.activeBoard()
          ? {
              ...board,
              columns: board.columns.map((column) => ({
                ...column,
                tasks: column.tasks.filter((task) => task !== deleteTask),
              })),
            }
          : board,
      ),
    );
  }
}
