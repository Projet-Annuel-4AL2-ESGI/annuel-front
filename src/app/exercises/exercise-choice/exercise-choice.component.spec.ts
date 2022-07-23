import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseChoiceComponent } from './exercise-choice.component';

describe('ExerciseChoiceComponent', () => {
  let component: ExerciseChoiceComponent;
  let fixture: ComponentFixture<ExerciseChoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExerciseChoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
