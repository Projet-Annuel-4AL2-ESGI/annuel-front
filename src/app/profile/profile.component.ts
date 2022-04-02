import { Component, OnInit } from '@angular/core';
import {User} from "../../models/User";
import {UserService} from "../../services/UserService";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentUser = localStorage.getItem('currentUser')

  email: string | undefined;
  password: string | undefined;
  confirm_password: string | undefined;

  constructor(private userService: UserService, private _snackBar: MatSnackBar) {}

  ngOnInit(): void {}

  register() {
    const user = new User(this.email, this.password)
    this.userService.createUser(user)
    localStorage.setItem('currentUser', JSON.stringify(user))
    window.location.reload()
  }

  login() {
    const user = new User(this.email, this.password)
    this.userService.findOneByMail(user.getEmail()).subscribe(
      value => {
        if (value?.getEmail() === user.getEmail() && value?.getPassword() === user.getPassword()) {
          localStorage.setItem('currentUser', JSON.stringify(user))
          window.location.reload()
        } else if (value?.getEmail() !== user.getEmail()) {
          this.openSnackBarError("Email provided is not associated with any existing user.")
        } else {
          this.openSnackBarError("Password is incorrect.")
        }
      },
      error => {
        console.log(error)
      }
    )
  }

  logout() {
    localStorage.removeItem('currentUser')
    window.location.reload()
  }

  openSnackBarError(message: string) {
    this._snackBar.open(message, '', {
      duration: 2000,
      panelClass: ['red-snackbar']
    })
  }
}
