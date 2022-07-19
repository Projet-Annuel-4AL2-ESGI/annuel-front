import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {CommentService} from "../../../../services/CommentService";
import {CommentGet} from "../../../../models/CommentGet";
import {Comment} from "../../../../models/Comment"
import {DomSanitizer} from "@angular/platform-browser";
import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-comment-dialog',
  templateUrl: './comment-dialog.component.html',
  styleUrls: ['./comment-dialog.component.css']
})
export class CommentDialogComponent implements OnInit {

  message: string = "";
  comments: CommentGet[] = [];
  currentUser = localStorage.getItem('currentUser')
  decoded: any

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public commentService: CommentService, public _sanitizer: DomSanitizer) {
    this.comments = this.data.data;
    if(this.currentUser != null) {
      this.decoded = jwt_decode(this.currentUser)
    }
  }

  ngOnInit(): void {
    console.log(this.data);
  }

  printMessage(){
    const comment: Comment = {
      id: null,
      postId: this.data.postId,
      userId: this.decoded.id,
      commentMessage: this.message,
    };
    this.commentService.createComment(comment).subscribe(value => {
      this.comments.push(value);
    })
    console.log(comment)
  }

  sanitize(image: string): any {
    return this._sanitizer.bypassSecurityTrustUrl('data:image/jpeg;base64,' + image);
  }

}
