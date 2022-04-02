import { Component, OnInit } from '@angular/core';
import {User} from "../../models/User";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  email: string | undefined;
  password: string | undefined;
  confirm_password: string | undefined;

  constructor() {

  }

  ngOnInit(): void {}

  register() {
    const user = new User(this.email, this.password)
    console.log(JSON.stringify(user))
  }

  login() {
    const user = new User(this.email, this.password)
    console.log(JSON.stringify(user))
  }

}
