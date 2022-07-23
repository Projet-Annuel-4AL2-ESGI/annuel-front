import { Component, OnInit } from '@angular/core';
import {Exercise} from "../../../models/Exercise";
import {Post} from "../../../models/Post";
import {DomSanitizer} from "@angular/platform-browser";
import jwt_decode from "jwt-decode";
import {PostService} from "../../../services/PostService";
import {ExerciseService} from "../../../services/ExerciseService";
import {UserService} from "../../../services/UserService";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatDialog} from "@angular/material/dialog";
import {UserImage} from "../../../models/UserImage";
import {DialogFollowComponent} from "../../profile/dialog-follow/dialog-follow.component";

@Component({
  selector: 'app-exercise-create-preview',
  templateUrl: './exercise-create-preview.component.html',
  styleUrls: ['./exercise-create-preview.component.css']
})
export class ExerciseCreatePreviewComponent implements OnInit {

  exercise!: Exercise;
  post!: Post;
  currentUser = localStorage.getItem('currentUser');
  decodedUser: any;
  description: string = "";
  selectedFile: any;

  constructor(private _sanitizer: DomSanitizer, private postService: PostService, private exerciseService: ExerciseService) {
    if (this.currentUser != null) {
      this.decodedUser = jwt_decode(this.currentUser)
    }
    this.exercise = history.state.data["exercise-created"] as Exercise
    this.post = new Post(null, "exo", this.decodedUser.id, this.decodedUser.username, this.exercise!.title, "", 0, null, null)
  }

  //TODO: username undefined
  //TODO: userId ok ??
  //TODO: image ok ??

  ngOnInit(): void {}

  sanitize(image: string): any {
    return this._sanitizer.bypassSecurityTrustUrl('data:image/jpeg;base64,' + image);
  }

  saveClicked() {
    this.post!.description = this.description
    this.exercise!.description = this.description
    console.log(this.exercise)
    console.log(this.post)
    //this.postService.create(this.post!)
    //this.exerciseService.create(this.exercise!) //TODO: Update post and exercise services with create method, maybe check sent data ??
  }

  onImageChanged(event: any){
    this.selectedFile = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(this.selectedFile);
    reader.onload = () => {
      if(reader.result != null && typeof reader.result === "string") {
        this.post.image = reader.result.split(',')[1]
      }
    };
  }
}
