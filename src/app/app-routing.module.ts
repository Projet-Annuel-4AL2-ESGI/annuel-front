import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {IdeComponent} from "./ide/ide.component";
import {ProfileComponent} from "./profile/profile.component";
import {AuthGuard} from "./auth.guard";
import {AuthComponent} from "./auth/auth.component";
import {UserComponent} from "./user/user.component";
import {UserResolver} from "./user/user-resolver";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'ide', component: IdeComponent, canActivate: [AuthGuard]},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  {path: 'auth', component: AuthComponent},

  {path: 'user/:id', component: UserComponent, resolve: {event: UserResolver}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
