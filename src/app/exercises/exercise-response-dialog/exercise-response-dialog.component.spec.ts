import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseResponseDialogComponent } from './exercise-response-dialog.component';

describe('ExerciseResponseDialogComponent', () => {
  let component: ExerciseResponseDialogComponent;
  let fixture: ComponentFixture<ExerciseResponseDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExerciseResponseDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseResponseDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
