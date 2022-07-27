import {Component, OnInit} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";
import {PostService} from "../../../services/PostService";
import jwt_decode from "jwt-decode";
import {Like} from "../../../models/Like";
import {LikeService} from "../../../services/LikeService";
import {PostLikes} from "../../../models/PostLikes";
import {CommentDialogComponent} from "./comment-dialog/comment-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {CommentService} from "../../../services/CommentService";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home-center',
  templateUrl: './home-center.component.html',
  styleUrls: ['./home-center.component.css']
})
export class HomeCenterComponent implements OnInit {

  currentUser = localStorage.getItem('currentUser')
  decoded: any
  posts: any = [];

  constructor(private _sanitizer: DomSanitizer, private postService: PostService, private likeService: LikeService,
              private matDialog: MatDialog, private commentService: CommentService, private router: Router) {

    if (this.currentUser != null) {
      this.decoded = jwt_decode(this.currentUser)
      postService.getPostsLikes(this.decoded.id).subscribe(posts => {
        this.posts = posts;
      })
    } else {
      postService.getPosts().subscribe(posts => {
        this.posts = posts;
      });
    }
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }

  public like(post: PostLikes): any {
    const like = new Like(null, this.decoded.id, post.id);
    this.likeService.like(like).subscribe(
      () => {
        post.liked = true
      }
    )
  }

  public dislike(post: PostLikes): any {
    const like = new Like(null, this.decoded.id, post.id);
    this.likeService.dislike(like).subscribe(
      () => {
        post.liked = false
      }
    )
  }

  async openDialog(item: number) {
    let comments: any;
    await this.commentService.getCommentsByPost(item).subscribe(value => {
      comments = value;
      console.log(value);
      this.matDialog.open(CommentDialogComponent, {
        height: '500px',
        width: '600px',
        data: {
          data: comments,
          postId: item,
        }
      });
    });
  }

  sanitize(image: string): any {
    return this._sanitizer.bypassSecurityTrustUrl('data:image/jpeg;base64,' + image);
  }

  goToUser(id: number) {
    this.router.navigate(['/user/' + id]).then(() => window.location.reload());
  }
}
