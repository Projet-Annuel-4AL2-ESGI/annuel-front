import {Component, OnInit} from '@angular/core';
import {TimeService} from "../../../services/TimeService";
import {UserService} from "../../../services/UserService";
import {DomSanitizer} from "@angular/platform-browser";
import {UserProfile} from "../../../models/UserProfile";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home-right',
  templateUrl: './home-right.component.html',
  styleUrls: ['./home-right.component.css']
})
export class HomeRightComponent implements OnInit {

  currentUser = localStorage.getItem('currentUser')
  times: [number, number, number][] = []
  users: UserProfile[] = []

  constructor(private timeService: TimeService, private userService: UserService, private _sanitizer: DomSanitizer, private router: Router) {
  }

  ngOnInit(): void {
    this.timeService.getGlobalLeaderboard().subscribe((value) => {
      this.times = value;
      for (let i = 0; i < this.times.length; i++) {
        this.userService.findOneProfile(this.times[i][0]).subscribe((profile) => {
          if (profile != undefined) {
            this.users[i] = profile;
          }
        })
      }
    })
  }

  sanitize(image: string): any {
    return this._sanitizer.bypassSecurityTrustUrl('data:image/jpeg;base64,' + image);
  }

  goToUser(id: number) {
    this.router.navigate(['/user/' + id]).then(() => window.location.reload());
  }
}
