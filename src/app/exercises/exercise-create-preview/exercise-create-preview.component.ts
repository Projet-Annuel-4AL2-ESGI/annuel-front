import {Component, OnInit} from '@angular/core';
import {Exercise} from "../../../models/Exercise";
import {Post} from "../../../models/Post";
import {DomSanitizer} from "@angular/platform-browser";
import jwt_decode from "jwt-decode";
import {PostService} from "../../../services/PostService";
import {ExerciseService} from "../../../services/ExerciseService";
import {Router} from "@angular/router";

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
  isLoading = false;

  constructor(private _sanitizer: DomSanitizer, private postService: PostService, private exerciseService: ExerciseService,
              private router: Router) {
    if (this.currentUser != null) {
      this.decodedUser = jwt_decode(this.currentUser)
    }
    this.exercise = history.state.data["exercise-created"] as Exercise
    this.post = new Post(null, "exo", null, null, this.exercise!.title,
      "", 0, null, null, null)
  }

  ngOnInit(): void {
  }

  sanitize(image: string): any {
    return this._sanitizer.bypassSecurityTrustUrl('data:image/jpeg;base64,' + image);
  }

  saveClicked() {
    this.isLoading = true
    this.post!.description = this.description
    this.exercise!.description = this.description
    console.log(this.exercise)
    console.log(this.post)
    this.exerciseService.create(this.exercise!).subscribe(value => {
      this.post!.exoId = value.id;
      this.postService.create(this.post!).subscribe(async () => {
          await this.router.navigate(['/']).then(() => window.location.reload());
        }
      )
    })
  }

  onImageChanged(event: any) {
    this.selectedFile = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(this.selectedFile);
    reader.onload = () => {
      if (reader.result != null && typeof reader.result === "string") {
        this.post.image = reader.result.split(',')[1]
      }
    };
  }
}
