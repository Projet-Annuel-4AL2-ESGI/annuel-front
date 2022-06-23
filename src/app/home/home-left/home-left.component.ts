import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../services/UserService";
import {User} from "../../../models/User";

@Component({
  selector: 'app-home-left',
  templateUrl: './home-left.component.html',
  styleUrls: ['./home-left.component.css']
})
export class HomeLeftComponent implements OnInit {

  users: any;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(user =>{
      this.users = user;
    });
  }

  ngAfterViewInit(): void {
  }

}
