import {Component, OnInit} from '@angular/core';
import {User} from "../../models/User";
import {UserService} from "../../services/UserService";
import {MatSnackBar} from "@angular/material/snack-bar";
import jwt_decode from "jwt-decode"
import * as bcrypt from 'bcryptjs';
import {UserProfile} from "../../models/UserProfile";
import {DomSanitizer} from "@angular/platform-browser";
import {UserImage} from "../../models/UserImage";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentUser = localStorage.getItem('currentUser')
  paresdJSON: any;
  decoded: any;
  user: any;
  selectedFile: any;

  constructor(private _sanitizer: DomSanitizer, private userService: UserService, private _snackBar: MatSnackBar) {
    if(this.currentUser != null) {
      this.decoded = jwt_decode(this.currentUser)
      this.userService.findOneProfile(this.decoded.id).subscribe(
        value => {this.user = value}
      )
    }
  }

  ngOnInit(): void {
  }

  onImageChanged(event: any){
    this.selectedFile = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(this.selectedFile);
    reader.onload = () => {
      if(reader.result != null && typeof reader.result === "string") {
          let userImage: UserImage = {
            image: reader.result.split(',')[1]
        }
        this.userService.updateImage(this.decoded.id, userImage).subscribe();
      }
    };
  }

  openSnackBarError(message: string) {
    this._snackBar.open(message, '', {
      duration: 2000,
      panelClass: ['red-snackbar']
    })
  }

  sanitize(image: string): any {
    return this._sanitizer.bypassSecurityTrustUrl('data:image/jpeg;base64,' + image);
  }
}
