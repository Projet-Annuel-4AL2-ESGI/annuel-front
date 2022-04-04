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
    this.userService.createUser(user).subscribe(
      value => {
        localStorage.setItem('currentUser', JSON.stringify(value))
        window.location.reload()
      },
      error => {
        this.openSnackBarError("There has been an error")
      }
    )

  }

  login() {
    const user = new User(this.email, this.password)
    this.userService.findOneByMail(user.email).subscribe(
      value => {
        if (value?.email === user.email && value?.password === user.password) {
          localStorage.setItem('currentUser', JSON.stringify(user))
          window.location.reload()
        } else if (value?.email !== user.email) {
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
