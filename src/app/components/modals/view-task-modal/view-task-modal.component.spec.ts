import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTaskModalComponent } from './view-task-modal.component';

describe('ViewTaskModalComponent', () => {
  let component: ViewTaskModalComponent;
  let fixture: ComponentFixture<ViewTaskModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewTaskModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewTaskModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
