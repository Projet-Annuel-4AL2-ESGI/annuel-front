import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {ProfileComponent} from './profile/profile.component';
import {IdeComponent} from './ide/ide.component';
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharingModule} from "./sharing/sharing.module";
import {HomeCenterComponent} from './home/home-center/home-center.component';
import { HomeLeftComponent } from './home/home-left/home-left.component';
import {AuthGuard} from "./auth.guard";
import { AuthComponent } from './auth/auth.component';
import { DialogFollowComponent } from './profile/dialog-follow/dialog-follow.component';
import { MatDialogModule } from "@angular/material/dialog";
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    IdeComponent,
    HomeCenterComponent,
    HomeLeftComponent,
    AuthComponent,
    DialogFollowComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    SharingModule,
    MatDialogModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
