import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ExerciseCreatePreviewComponent} from './exercise-create-preview.component';

describe('ExerciseCreatePreviewComponent', () => {
  let component: ExerciseCreatePreviewComponent;
  let fixture: ComponentFixture<ExerciseCreatePreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExerciseCreatePreviewComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseCreatePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
