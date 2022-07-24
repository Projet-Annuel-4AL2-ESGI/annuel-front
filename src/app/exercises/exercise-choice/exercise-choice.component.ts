import {Component, OnInit} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";
import {Exercise} from "../../../models/Exercise";
import {ExerciseService} from "../../../services/ExerciseService";
import {Time} from "../../../models/Time";
import {TimeService} from "../../../services/TimeService";

@Component({
  selector: 'app-exercise-choice',
  templateUrl: './exercise-choice.component.html',
  styleUrls: ['./exercise-choice.component.css']
})
export class ExerciseChoiceComponent implements OnInit {
  exercises: [Exercise] | undefined;
  leaderboard: Time[] | undefined;
  selectedExercise: Exercise | undefined;
  currentUser = localStorage.getItem('currentUser')

  constructor(private _sanitizer: DomSanitizer, private exerciseService: ExerciseService, private timeService: TimeService) {
    exerciseService.getAll().subscribe(exercises => {
      this.exercises = exercises;
      this.selectedExercise = this.exercises[0]
      this.updateLeaderboard()
    });
  }

  ngOnInit(): void {
  }

  clickedExercise(exercise: Exercise, index: number) {
    this.selectedExercise = exercise
    this.updateLeaderboard()
  }

  updateLeaderboard() {
    this.leaderboard = []
    this.timeService.getLeaderboardForExerciseId(this.selectedExercise!.id!).subscribe((leaderboard) => {
      this.leaderboard = leaderboard
    })
  }
}
