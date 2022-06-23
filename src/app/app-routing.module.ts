import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {IdeComponent} from "./ide/ide.component";
import {ProfileComponent} from "./profile/profile.component";
import {AuthGuard} from "./auth.guard";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'ide', component: IdeComponent, canActivate: [AuthGuard]},
  {path: 'profile', component: ProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
