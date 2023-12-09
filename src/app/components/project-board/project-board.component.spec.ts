import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectBoardComponent } from './project-board.component';

describe('ProjectBoardComponent', () => {
  let component: ProjectBoardComponent;
  let fixture: ComponentFixture<ProjectBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectBoardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
