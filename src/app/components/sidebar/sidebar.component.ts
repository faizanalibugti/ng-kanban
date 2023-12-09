import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ThemeTogglerComponent } from './theme-toggler/theme-toggler.component';
import { Board } from '../../models/board.model';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [NgClass, NgIf, NgFor, ThemeTogglerComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  @Input() boards!: Board[];
  @Input() activeBoard!: Board | null;
  @Input() opened!: boolean;
  @Output() closeSidebar = new EventEmitter<void>();
  @Output() enableDarkMode = new EventEmitter<boolean>();
  @Output() add = new EventEmitter<void>();
  @Output() selected = new EventEmitter<number>();

  collapseSidebar(): void {
    this.closeSidebar.emit();
  }

  addBoard(): void {
    this.add.emit();
  }

  selectBoard(boardIdx: number): void {
    this.selected.emit(boardIdx);
  }
}
