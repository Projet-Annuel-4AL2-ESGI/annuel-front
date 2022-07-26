import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../services/UserService";
import jwt_decode from "jwt-decode";
import {Follow} from "../../../models/Follow";
import {FollowService} from "../../../services/FollowService";
import {UserFollow} from "../../../models/UserFollow";
import {DomSanitizer} from "@angular/platform-browser";
import {Router} from "@angular/router";

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

  constructor(private userService: UserService, private followService: FollowService, private _sanitizer: DomSanitizer, private router: Router) {
  }

  ngOnInit(): void {
    if (this.currentUser != null) {
      this.decoded = jwt_decode(this.currentUser)
      //this.follows = this.followService.getFollowings(this.decoded.id);
      console.log("follows" + this.decoded.id);
      this.userService.getNewFollows(this.decoded.id).subscribe(user => {
        this.users = user;
        console.log(this.users);
      });
    } else {
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
      () => {
        id.follow = true
      }
    );
    console.log(this.follows);
  }

  public unfollow(id: UserFollow) {
    const follow = new Follow(null, this.decoded.id, id.id);
    this.followService.unfollow(follow).subscribe(
      () => {
        id.follow = false
      }
    );
    console.log(this.follows);
  }

  sanitize(image: string): any {
    return this._sanitizer.bypassSecurityTrustUrl('data:image/jpeg;base64,' + image);
  }

  goToUser(id: number) {
    this.router.navigate(['/user/' + id]).then(() => window.location.reload());
  }
}
