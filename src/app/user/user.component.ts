import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";
import {UserService} from "../../services/UserService";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatDialog} from "@angular/material/dialog";
import jwt_decode from "jwt-decode";
import {UserImage} from "../../models/UserImage";
import {DialogFollowComponent} from "../profile/dialog-follow/dialog-follow.component";
import {ActivatedRoute} from "@angular/router";
import {UserProfile} from "../../models/UserProfile";
import {FollowService} from "../../services/FollowService";
import {Follow} from "../../models/Follow";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  currentUser = localStorage.getItem('currentUser')
  paresdJSON: any;
  decoded: any;
  user: any;
  selectedFile: any;
  isFollow: any = [];

  constructor(private _sanitizer: DomSanitizer, private userService: UserService, private _snackBar: MatSnackBar,
              private matDialog: MatDialog, private activatedRoute: ActivatedRoute, private followService: FollowService) {
    this.activatedRoute.data.subscribe(
      value => {this.user = value}
    )

    console.log(this.user);
  }

  ngOnInit(): void {
    if(this.currentUser != null) {
      this.decoded = jwt_decode(this.currentUser)
      this.followService.getOneFollowing(this.decoded.id, this.user.event.id).subscribe( value =>{
        console.log(value);
          this.isFollow = value;
          console.log(this.isFollow);
      })
    }
  }

  ngAfterViewInit(): void {
  }

  async openDialogFollowers(){
    await this.userService.getFollowersList(this.user.event.id).subscribe(value => {
      this.matDialog.open(DialogFollowComponent, {
        height: '500px',
        width: '400px',
        data: {
          users: value,
        }
      });
    })
  }

  async openDialogFollowing(){
    await this.userService.getFollowingList(this.user.event.id).subscribe(value => {
      this.matDialog.open(DialogFollowComponent, {
        height: '500px',
        width: '400px',
        data: {
          users: value,
        }
      });
    })
  }

  follow() {
    const follow: Follow = {
      id: null,
      follower: this.decoded.id,
      following: this.user.event.id
    }
    if(this.currentUser != null) {
      this.followService.follow(follow).subscribe( value => {
        this.isFollow.push(value);
      })
    }
    this.isFollow.push(follow);
  }

  unfollow() {
    const follow: Follow = {
      id: null,
      follower: this.decoded.id,
      following: this.user.event.id
    }
    if(this.currentUser != null) {
      this.followService.unfollow(follow).subscribe( value => {
        this.isFollow.pop();
      })
    }
  }


  openSnackBarError(message: string) {
    this._snackBar.open(message, '', {
      duration: 2000,
      panelClass: ['red-snackbar']
    })
  }

  sanitize(image: string): any {
    return this._sanitizer.bypassSecurityTrustUrl('data:image/jpeg;base64,' + image);
  }

}
