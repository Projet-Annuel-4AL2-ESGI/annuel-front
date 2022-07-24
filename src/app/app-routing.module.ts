import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {IdeComponent} from "./ide/ide.component";
import {ProfileComponent} from "./profile/profile.component";
import {AuthGuard} from "./auth.guard";
import {AuthComponent} from "./auth/auth.component";
import {UserComponent} from "./user/user.component";
import {UserResolver} from "./user/user-resolver";
import {ExerciseComponent} from "./exercises/exercise/exercise.component";
import {ExerciseChoiceComponent} from "./exercises/exercise-choice/exercise-choice.component";
import {ExerciseResolver} from "./exercises/exercise/exercise.resolver";
import {ExerciseCreateComponent} from "./exercises/exercise-create/exercise-create.component";
import {ExerciseCreatePreviewComponent} from "./exercises/exercise-create-preview/exercise-create-preview.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'ide', component: IdeComponent, canActivate: [AuthGuard]},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  {path: 'auth', component: AuthComponent},

  {path: 'user/:id', component: UserComponent, resolve: {event: UserResolver}},
  {path: 'exercise/:id', component: ExerciseComponent, canActivate: [AuthGuard], resolve: {event: ExerciseResolver}},
  {path: 'exercise-create', component: ExerciseCreateComponent, canActivate: [AuthGuard]},
  {path: 'exercise-create/preview', component: ExerciseCreatePreviewComponent, canActivate: [AuthGuard]},
  {path: 'choice', component: ExerciseChoiceComponent},
  {path: '**', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
