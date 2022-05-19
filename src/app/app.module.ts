import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { IdeComponent } from './ide/ide.component';
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharingModule } from "./sharing/sharing.module";
import { HomeCenterComponent } from './home/home-center/home-center.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    IdeComponent,
    HomeCenterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    SharingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
