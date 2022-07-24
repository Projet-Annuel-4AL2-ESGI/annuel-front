import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {DomSanitizer} from "@angular/platform-browser";
import {PostService} from "../../../services/PostService";
import jwt_decode from "jwt-decode";
import {Post} from "../../../models/Post";
import {Exercise} from "../../../models/Exercise";
import {Router} from "@angular/router";

@Component({
  selector: 'app-exercise-response-dialog',
  templateUrl: './exercise-response-dialog.component.html',
  styleUrls: ['./exercise-response-dialog.component.css']
})
export class ExerciseResponseDialogComponent implements OnInit {

  response: string;
  exercise: Exercise;
  isValidated: boolean = false;
  currentUser = localStorage.getItem('currentUser')
  decoded: any

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private _sanitizer: DomSanitizer, private postService: PostService,
  private router: Router) {
    this.response = this.data.data;
    this.exercise = this.data.exo;
    console.log(this.response);
    if(this.response == "True" || this.response.toString() == "true") {
      this.isValidated = true;
    }
  }

  ngOnInit(): void {
  }

  sharePost() {
    if(this.currentUser != null){
      this.decoded = jwt_decode(this.currentUser);

      const post = new Post(null, "notif", this.decoded.id, null, "share",
        "I just finished "+ this.exercise.title, 0, null, null, this.exercise.id)

      this.postService.create(post).subscribe(value => {
        this.router.navigate(['/']).then(() => window.location.reload());
      })
    }
  }

  goToHome() {
    this.router.navigate(['/']).then(() => window.location.reload());
  }
}
