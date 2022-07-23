import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/UserService";
import {MatSnackBar} from "@angular/material/snack-bar";
import jwt_decode from "jwt-decode";
import {User} from "../../models/User";
import {Router} from "@angular/router";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  currentUser = localStorage.getItem('currentUser')
  decoded: any;

  email: string | undefined;
  password: string | undefined;
  registrationEmail: string | undefined;
  registrationPassword: string | undefined;
  username: string | undefined;
  confirm_password: string | undefined;

  constructor(private userService: UserService, private _snackBar: MatSnackBar, private router: Router) {
  }

  ngOnInit(): void {
    if (this.currentUser != null) {
      this.decoded = jwt_decode(this.currentUser);
    }
    //console.log(this.decoded.id);
  }

  register() {
    const user = new User(this.registrationEmail, this.username, this.registrationPassword)
    this.userService.createUser(user).subscribe(
      async value => {
        //localStorage.setItem('currentUser', JSON.stringify(value))
        await this.router.navigate(['/']).then(() => window.location.reload());
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
    this.userService.login(user.email, user.password).subscribe(
      async value => {
        if (value == undefined) {
          this.openSnackBarError("There was an error fetching data.");
          return;
        }
        localStorage.setItem('currentUser', JSON.stringify(value))
        await this.router.navigate(['/profile']).then(() => window.location.reload());
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
