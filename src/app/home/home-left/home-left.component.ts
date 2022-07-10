import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../services/UserService";
import jwt_decode from "jwt-decode";
import {Follow} from "../../../models/Follow";
import {FollowService} from "../../../services/FollowService";
import {UserFollow} from "../../../models/UserFollow";

@Component({
  selector: 'app-home-left',
  templateUrl: './home-left.component.html',
  styleUrls: ['./home-left.component.css']
})
export class HomeLeftComponent implements OnInit {

  currentUser = localStorage.getItem('currentUser')
  decoded: any
  follows: UserFollow[] = []
  users: any;
  constructor(private userService: UserService, private followService: FollowService) { }

  ngOnInit(): void {
    if(this.currentUser != null){
      this.decoded = jwt_decode(this.currentUser)
      //this.follows = this.followService.getFollowings(this.decoded.id);
      console.log("follows" + this.decoded.id);
      this.userService.getNewFollows(this.decoded.id).subscribe(user =>{
        this.users = user;
        console.log(this.users);
      });
    }
    else {
      this.userService.getAllUsers().subscribe(user => {
        this.users = user;
        console.log(this.users);
      });
    }
  }

  ngAfterViewInit(): void {
  }

  public follow(id: UserFollow) {
    const follow = new Follow(null, this.decoded.id, id.id);
    this.followService.follow(follow).subscribe(
      value => {id.follow = true}
    );
    console.log(this.follows);
  }

  public unfollow(id: UserFollow) {
    const follow = new Follow(null, this.decoded.id, id.id);
    this.followService.unfollow(follow).subscribe(
      value => {id.follow = false}
    );
    console.log(this.follows);
  }

  /*public compareFollows(users: any, followers: follows) {

  }*/

}
