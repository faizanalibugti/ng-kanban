import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar-toggle',
  standalone: true,
  imports: [],
  templateUrl: './sidebar-toggle.component.html',
  styleUrl: './sidebar-toggle.component.scss',
})
export class SidebarToggleComponent {
  @Output() openSidebar = new EventEmitter<void>();

  expandSidebar(): void {
    this.openSidebar.emit();
  }
}
