import { Component, OnInit } from '@angular/core';
import {TimeService} from "../../../services/TimeService";
import {Time} from "../../../models/Time";
import {User} from "../../../models/User";
import {UserService} from "../../../services/UserService";
import {Observable} from "rxjs";
import {DomSanitizer} from "@angular/platform-browser";
import {UserProfile} from "../../../models/UserProfile";

@Component({
  selector: 'app-home-right',
  templateUrl: './home-right.component.html',
  styleUrls: ['./home-right.component.css']
})
export class HomeRightComponent implements OnInit {

  currentUser = localStorage.getItem('currentUser')
  times : [number, number, number][] = []
  users: UserProfile[] = []

  constructor(private timeService: TimeService, private userService: UserService, private _sanitizer: DomSanitizer, private router: Router) {
  }

  ngOnInit(): void {
    this.timeService.getGlobalLeaderboard().subscribe( (value) => {
      this.times = value;
      this.times.forEach((value) => {
        this.userService.findOneProfile(value[0]).subscribe((value) => {
          if (value != undefined) {
            this.users.push(value);
            console.log(value.image);
          }
        })
      });
    })
  }

  sanitize(image: string): any {
    return this._sanitizer.bypassSecurityTrustUrl('data:image/jpeg;base64,' + image);
  }

  goToUser(id: number) {
    this.router.navigate(['/user/' + id]).then(() => window.location.reload());
  }
}
