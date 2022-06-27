import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {IdeComponent} from "./ide/ide.component";
import {ProfileComponent} from "./profile/profile.component";
import {AuthGuard} from "./auth.guard";
import {AuthComponent} from "./auth/auth.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'ide', component: IdeComponent, canActivate: [AuthGuard]},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  {path: 'auth', component: AuthComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
