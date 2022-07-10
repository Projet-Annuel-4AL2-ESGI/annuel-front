import {Component, OnInit} from '@angular/core';
import {User} from "../../models/User";
import {UserService} from "../../services/UserService";
import {MatSnackBar} from "@angular/material/snack-bar";
import jwt_decode from "jwt-decode"
import * as bcrypt from 'bcryptjs';
import {UserProfile} from "../../models/UserProfile";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentUser = localStorage.getItem('currentUser')
  paresdJSON: any;
  decoded: any;
  user?: UserProfile | undefined;

  constructor(private userService: UserService, private _snackBar: MatSnackBar) {
    if(this.currentUser != null) {
      this.decoded = jwt_decode(this.currentUser)
      this.userService.findOneProfile(this.decoded.id).subscribe(
        value => {this.user = value}
      )
    }
  }

  ngOnInit(): void {
  }
  openSnackBarError(message: string) {
    this._snackBar.open(message, '', {
      duration: 2000,
      panelClass: ['red-snackbar']
    })
  }
}
