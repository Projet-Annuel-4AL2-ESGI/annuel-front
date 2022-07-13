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

  constructor(private _sanitizer: DomSanitizer, private userService: UserService, private _snackBar: MatSnackBar,
              private matDialog: MatDialog, private activatedRoute: ActivatedRoute) {
    if(this.currentUser != null) {
      this.decoded = jwt_decode(this.currentUser)
    }
    this.activatedRoute.data.subscribe(
      value => {this.user = value}
    )
  }

  ngOnInit(): void {
    console.log(this.user);
  }

  openDialog(){
    this.matDialog.open(DialogFollowComponent);
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
