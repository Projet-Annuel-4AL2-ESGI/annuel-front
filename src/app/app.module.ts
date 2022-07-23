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
import {HomeLeftComponent} from './home/home-left/home-left.component';
import {AuthGuard} from "./auth.guard";
import {AuthComponent} from './auth/auth.component';
import {ExerciseComponent} from './exercises/exercise/exercise.component';
import {ExerciseChoiceComponent} from './exercises/exercise-choice/exercise-choice.component';
import {DialogFollowComponent} from './profile/dialog-follow/dialog-follow.component';
import {MatDialogModule} from "@angular/material/dialog";
import {UserComponent} from './user/user.component';
import {CommentDialogComponent} from './home/home-center/comment-dialog/comment-dialog.component';
import {DialogFollowingComponent} from './profile/dialog-following/dialog-following.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {ExerciseCreateComponent} from './exercises/exercise-create/exercise-create.component';
import {ExerciseResponseDialogComponent} from './exercises/exercise-response-dialog/exercise-response-dialog.component';
import {ExerciseCreatePreviewComponent} from './exercises/exercise-create-preview/exercise-create-preview.component';

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
    UserComponent,
    CommentDialogComponent,
    DialogFollowingComponent,
    UserComponent,
    ExerciseComponent,
    ExerciseChoiceComponent,
    ExerciseCreateComponent,
    ExerciseResponseDialogComponent,
    ExerciseCreatePreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    SharingModule,
    MatDialogModule,
    MatSidenavModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
