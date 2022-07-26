import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {DomSanitizer} from "@angular/platform-browser";
import {UserFollow} from "../../../models/UserFollow";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dialog-following',
  templateUrl: './dialog-following.component.html',
  styleUrls: ['./dialog-following.component.css']
})
export class DialogFollowingComponent implements OnInit {

  currentUser = localStorage.getItem('currentUser')
  decoded: any
  userList: UserFollow[] = [];

  constructor(@Inject(MAT_DIALOG_DATA) public users: any, public _sanitizer: DomSanitizer, private router: Router) {
    this.userList = this.users.users;
  }

  ngOnInit(): void {
  }

  sanitize(image: string): any {
    return this._sanitizer.bypassSecurityTrustUrl('data:image/jpeg;base64,' + image);
  }

  goToUser(id: number) {
    this.router.navigate(['/user/' + id]).then(() => window.location.reload());
  }
}
