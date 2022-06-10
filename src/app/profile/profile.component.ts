import {Component, OnInit} from '@angular/core';
import {User} from "../../models/User";
import {UserService} from "../../services/UserService";
import {MatSnackBar} from "@angular/material/snack-bar";
import * as bcrypt from 'bcryptjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentUser = localStorage.getItem('currentUser')

  email: string | undefined;
  password: string | undefined;
  username: string | undefined;
  confirm_password: string | undefined;

  constructor(private userService: UserService, private _snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
  }

  register() {
    const user = new User(this.email, this.username, this.password)
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
    const user = new User(this.email, undefined, this.password)
    if (user == undefined || user.password == undefined) {
      this.openSnackBarError("Provide a password.");
      return;
    }
    this.userService.findOneByMail(user.email).subscribe(
      async value => {
        if (value == undefined || value.password == undefined) {
          this.openSnackBarError("There was an error fetching data.");
          return;
        }
        if (value.email === user.email && await bcrypt.compare(user.password!, value.password)) {
          localStorage.setItem('currentUser', JSON.stringify(user))
          window.location.reload()
        } else if (value.email !== user.email) {
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
