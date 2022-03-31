import { Component, OnInit } from '@angular/core';

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

  ngOnInit(): void {
  }

  register() {
    // console.log(this.email, this.password);
  }

  login() {
    console.log("gezevjd")
  }

}
