import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
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
export class AppComponent {
  darkMode = false;

  isSidebarOpen = true;

  boards: Board[] = [
    {
      name: 'Platform Launch',
      columns: [
        {
          name: 'Todo',
          tasks: [
            {
              title: 'Build UI for onboarding flow',
              description: '',
              status: 'Todo',
              subtasks: [
                {
                  title: 'Sign up page',
                  isCompleted: true,
                },
                {
                  title: 'Sign in page',
                  isCompleted: false,
                },
                {
                  title: 'Welcome page',
                  isCompleted: false,
                },
              ],
            },
            {
              title: 'Build UI for search',
              description: '',
              status: 'Todo',
              subtasks: [
                {
                  title: 'Search page',
                  isCompleted: false,
                },
              ],
            },
            {
              title: 'Build settings UI',
              description: '',
              status: 'Todo',
              subtasks: [
                {
                  title: 'Account page',
                  isCompleted: false,
                },
                {
                  title: 'Billing page',
                  isCompleted: false,
                },
              ],
            },
            {
              title: 'QA and test all major user journeys',
              description:
                'Once we feel version one is ready, we need to rigorously test it both internally and externally to identify any major gaps.',
              status: 'Todo',
              subtasks: [
                {
                  title: 'Internal testing',
                  isCompleted: false,
                },
                {
                  title: 'External testing',
                  isCompleted: false,
                },
              ],
            },
          ],
        },
        {
          name: 'Doing',
          tasks: [
            {
              title: 'Design settings and search pages',
              description: '',
              status: 'Doing',
              subtasks: [
                {
                  title: 'Settings - Account page',
                  isCompleted: true,
                },
                {
                  title: 'Settings - Billing page',
                  isCompleted: true,
                },
                {
                  title: 'Search page',
                  isCompleted: false,
                },
              ],
            },
            {
              title: 'Add account management endpoints',
              description: '',
              status: 'Doing',
              subtasks: [
                {
                  title: 'Upgrade plan',
                  isCompleted: true,
                },
                {
                  title: 'Cancel plan',
                  isCompleted: true,
                },
                {
                  title: 'Update payment method',
                  isCompleted: false,
                },
              ],
            },
            {
              title: 'Design onboarding flow',
              description: '',
              status: 'Doing',
              subtasks: [
                {
                  title: 'Sign up page',
                  isCompleted: true,
                },
                {
                  title: 'Sign in page',
                  isCompleted: false,
                },
                {
                  title: 'Welcome page',
                  isCompleted: false,
                },
              ],
            },
            {
              title: 'Add search enpoints',
              description: '',
              status: 'Doing',
              subtasks: [
                {
                  title: 'Add search endpoint',
                  isCompleted: true,
                },
                {
                  title: 'Define search filters',
                  isCompleted: false,
                },
              ],
            },
            {
              title: 'Add authentication endpoints',
              description: '',
              status: 'Doing',
              subtasks: [
                {
                  title: 'Define user model',
                  isCompleted: true,
                },
                {
                  title: 'Add auth endpoints',
                  isCompleted: false,
                },
              ],
            },
            {
              title:
                'Research pricing points of various competitors and trial different business models',
              description:
                "We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
              status: 'Doing',
              subtasks: [
                {
                  title: 'Research competitor pricing and business models',
                  isCompleted: true,
                },
                {
                  title: 'Outline a business model that works for our solution',
                  isCompleted: false,
                },
                {
                  title:
                    'Talk to potential customers about our proposed solution and ask for fair price expectancy',
                  isCompleted: false,
                },
              ],
            },
          ],
        },
        {
          name: 'Done',
          tasks: [
            {
              title: 'Conduct 5 wireframe tests',
              description:
                'Ensure the layout continues to make sense and we have strong buy-in from potential users.',
              status: 'Done',
              subtasks: [
                {
                  title: 'Complete 5 wireframe prototype tests',
                  isCompleted: true,
                },
              ],
            },
            {
              title: 'Create wireframe prototype',
              description:
                'Create a greyscale clickable wireframe prototype to test our asssumptions so far.',
              status: 'Done',
              subtasks: [
                {
                  title: 'Create clickable wireframe prototype in Balsamiq',
                  isCompleted: true,
                },
              ],
            },
            {
              title: 'Review results of usability tests and iterate',
              description:
                "Keep iterating through the subtasks until we're clear on the core concepts for the app.",
              status: 'Done',
              subtasks: [
                {
                  title:
                    'Meet to review notes from previous tests and plan changes',
                  isCompleted: true,
                },
                {
                  title: 'Make changes to paper prototypes',
                  isCompleted: true,
                },
                {
                  title: 'Conduct 5 usability tests',
                  isCompleted: true,
                },
              ],
            },
            {
              title:
                'Create paper prototypes and conduct 10 usability tests with potential customers',
              description: '',
              status: 'Done',
              subtasks: [
                {
                  title: 'Create paper prototypes for version one',
                  isCompleted: true,
                },
                {
                  title: 'Complete 10 usability tests',
                  isCompleted: true,
                },
              ],
            },
            {
              title: 'Market discovery',
              description:
                'We need to define and refine our core product. Interviews will help us learn common pain points and help us define the strongest MVP.',
              status: 'Done',
              subtasks: [
                {
                  title: 'Interview 10 prospective customers',
                  isCompleted: true,
                },
              ],
            },
            {
              title: 'Competitor analysis',
              description: '',
              status: 'Done',
              subtasks: [
                {
                  title: 'Find direct and indirect competitors',
                  isCompleted: true,
                },
                {
                  title: 'SWOT analysis for each competitor',
                  isCompleted: true,
                },
              ],
            },
            {
              title: 'Research the market',
              description:
                'We need to get a solid overview of the market to ensure we have up-to-date estimates of market size and demand.',
              status: 'Done',
              subtasks: [
                {
                  title: 'Write up research analysis',
                  isCompleted: true,
                },
                {
                  title: 'Calculate TAM',
                  isCompleted: true,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'Marketing Plan',
      columns: [
        {
          name: 'Todo',
          tasks: [
            {
              title: 'Plan Product Hunt launch',
              description: '',
              status: 'Todo',
              subtasks: [
                {
                  title: 'Find hunter',
                  isCompleted: false,
                },
                {
                  title: 'Gather assets',
                  isCompleted: false,
                },
                {
                  title: 'Draft product page',
                  isCompleted: false,
                },
                {
                  title: 'Notify customers',
                  isCompleted: false,
                },
                {
                  title: 'Notify network',
                  isCompleted: false,
                },
                {
                  title: 'Launch!',
                  isCompleted: false,
                },
              ],
            },
            {
              title: 'Share on Show HN',
              description: '',
              status: '',
              subtasks: [
                {
                  title: 'Draft out HN post',
                  isCompleted: false,
                },
                {
                  title: 'Get feedback and refine',
                  isCompleted: false,
                },
                {
                  title: 'Publish post',
                  isCompleted: false,
                },
              ],
            },
            {
              title: 'Write launch article to publish on multiple channels',
              description: '',
              status: '',
              subtasks: [
                {
                  title: 'Write article',
                  isCompleted: false,
                },
                {
                  title: 'Publish on LinkedIn',
                  isCompleted: false,
                },
                {
                  title: 'Publish on Inndie Hackers',
                  isCompleted: false,
                },
                {
                  title: 'Publish on Medium',
                  isCompleted: false,
                },
              ],
            },
          ],
        },
        {
          name: 'Doing',
          tasks: [],
        },
        {
          name: 'Done',
          tasks: [],
        },
      ],
    },
    {
      name: 'Roadmap',
      columns: [
        {
          name: 'Now',
          tasks: [
            {
              title: 'Launch version one',
              description: '',
              status: '',
              subtasks: [
                {
                  title: 'Launch privately to our waitlist',
                  isCompleted: false,
                },
                {
                  title: 'Launch publicly on PH, HN, etc.',
                  isCompleted: false,
                },
              ],
            },
            {
              title: 'Review early feedback and plan next steps for roadmap',
              description:
                "Beyond the initial launch, we're keeping the initial roadmap completely empty. This meeting will help us plan out our next steps based on actual customer feedback.",
              status: '',
              subtasks: [
                {
                  title: 'Interview 10 customers',
                  isCompleted: false,
                },
                {
                  title: 'Review common customer pain points and suggestions',
                  isCompleted: false,
                },
                {
                  title: 'Outline next steps for our roadmap',
                  isCompleted: false,
                },
              ],
            },
          ],
        },
        {
          name: 'Next',
          tasks: [],
        },
        {
          name: 'Later',
          tasks: [],
        },
      ],
    },
  ];

  activeBoard: Board | null = this.boards[0];

  currentIdx: number = 0;

  constructor(private dialog: MatDialog) {}

  selectBoard(boardIdx: number) {
    this.currentIdx = boardIdx;
    this.activeBoard = this.boards[boardIdx];
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

      this.boards = [...this.boards, res];

      this.selectBoard(this.boards.length - 1);
    });
  }

  editBoard(): void {
    const dialogRef = this.dialog.open(BoardModalComponent, {
      data: {
        board: this.activeBoard ? this.activeBoard : { name: '', columns: [] },
        darkMode: this.darkMode,
      },
    });

    dialogRef.afterClosed().subscribe((res: Board) => {
      if (!res) {
        return;
      }

      this.boards = this.boards.map((board) =>
        board === this.activeBoard ? { ...res } : board,
      );

      this.selectBoard(this.currentIdx);
    });
  }

  deleteBoard(): void {
    const dialogRef = this.dialog.open(DeleteModalComponent, {
      data: {
        name: this.activeBoard?.name,
        isBoard: true,
        darkMode: this.darkMode,
      },
    });

    dialogRef.afterClosed().subscribe((success: boolean) => {
      if (!success) {
        return;
      }

      this.boards = this.boards.filter((board) => board !== this.activeBoard);

      if (this.boards.length >= 1) {
        this.selectBoard(0);
      } else {
        this.activeBoard = null;
      }
    });
  }

  addTask(): void {
    const dialogRef = this.dialog.open(TaskModalComponent, {
      data: {
        editMode: false,
        darkMode: this.darkMode,
        columns: this.activeBoard?.columns,
      },
    });

    dialogRef.afterClosed().subscribe((res: Task) => {
      console.log(res);
      if (!res) {
        return;
      }

      this.boards = this.boards.map((board) => {
        if (board === this.activeBoard) {
          return {
            ...board,
            columns: board.columns.map((column) => ({
              ...column,
              tasks:
                column.name === res.status
                  ? [...column.tasks, res]
                  : column.tasks,
            })),
          };
        } else {
          return board;
        }
      });

      this.selectBoard(this.currentIdx);
    });
  }

  editTask(editTask: Task): void {
    const dialogRef = this.dialog.open(TaskModalComponent, {
      data: {
        task: editTask,
        editMode: true,
        darkMode: this.darkMode,
        columns: this.activeBoard?.columns,
      },
    });

    dialogRef.afterClosed().subscribe((res: Task) => {
      if (!res) {
        return;
      }

      this.updateTask({ task: res, columnName: res.status });

      this.selectBoard(this.currentIdx);
    });
  }

  updateTask(updateTask: { task: Task; columnName: string }) {
    const previousTaskColumnName = this.activeBoard?.columns
      .map((column) => ({
        ...column,
        tasks: column.tasks.filter(
          (task) => task.title === updateTask.task.title,
        ),
      }))
      .filter((column) => column.tasks.length > 0)
      .map((column) => column.name)[0];

    this.boards = this.boards.map((board) => {
      if (board === this.activeBoard) {
        if (previousTaskColumnName === updateTask.columnName) {
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
          // remove task from previous column
          return {
            ...board,
            columns: board.columns.map((column) => {
              if (column.name === updateTask.columnName) {
                return {
                  ...column,
                  tasks: [...column.tasks, updateTask.task],
                };
              } else if (column.name === previousTaskColumnName) {
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
    });

    this.selectBoard(this.currentIdx);
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

      this.boards = this.boards.map((board) => {
        if (board === this.activeBoard) {
          return {
            ...board,
            columns: board.columns.map((column) => ({
              ...column,
              tasks: column.tasks.filter((task) => task !== deleteTask),
            })),
          };
        } else {
          return board;
        }
      });

      this.selectBoard(this.currentIdx);
    });
  }
}
