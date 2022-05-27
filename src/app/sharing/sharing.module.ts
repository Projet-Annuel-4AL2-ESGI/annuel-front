import {NgModule} from "@angular/core";
import {MatCardModule} from "@angular/material/card"
import {MatTabsModule} from "@angular/material/tabs"
import {MatInputModule} from "@angular/material/input"
import {MatButtonModule} from "@angular/material/button"
import {FormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon"
import {MatGridListModule} from "@angular/material/grid-list";
import {HttpClientModule} from '@angular/common/http';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MenuComponent} from './menu/menu/menu.component';
import {MatToolbarModule} from "@angular/material/toolbar";

@NgModule({
  declarations: [


    MenuComponent
  ],
  imports: [
    MatCardModule,
    MatTabsModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatIconModule,
    MatGridListModule,
    HttpClientModule,
    MatSnackBarModule,
    MatToolbarModule
  ],
  exports: [
    MatCardModule,
    MatTabsModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatIconModule,
    MatGridListModule,
    HttpClientModule,
    MatSnackBarModule,
    MenuComponent
  ]
})
export class SharingModule {
}
