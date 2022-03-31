import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {IdeComponent} from "./ide/ide.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ide', component: IdeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
