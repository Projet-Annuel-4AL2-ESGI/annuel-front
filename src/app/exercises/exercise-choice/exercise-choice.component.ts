import {Component, OnInit} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";
import {Exercise} from "../../../models/Exercise";
import {ExerciseService} from "../../../services/ExerciseService";

@Component({
  selector: 'app-exercise-choice',
  templateUrl: './exercise-choice.component.html',
  styleUrls: ['./exercise-choice.component.css']
})
export class ExerciseChoiceComponent implements OnInit {
  exercises: [Exercise] | undefined;
  selectedExercise: Exercise | undefined;
  currentUser = localStorage.getItem('currentUser')

  constructor(private _sanitizer: DomSanitizer, private exerciseService: ExerciseService) {
    exerciseService.getAll().subscribe( exercises => {
      this.exercises = exercises;
      this.selectedExercise = this.exercises[0]
    });
  }

  ngOnInit(): void {}


  clickedExercise(exercise: Exercise) {
    this.selectedExercise = exercise
  }
}
