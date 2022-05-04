import { NgModule } from "@angular/core";
import { MatCardModule } from "@angular/material/card"
import { MatTabsModule } from "@angular/material/tabs"
import { MatInputModule } from "@angular/material/input"
import { MatButtonModule } from "@angular/material/button"
import { FormsModule } from "@angular/forms";
import { MatIconModule } from "@angular/material/icon"
import { MatGridListModule } from "@angular/material/grid-list";
import { HttpClientModule } from '@angular/common/http';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [

  ],
  imports: [
    MatCardModule,
    MatTabsModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatGridListModule,
    HttpClientModule,
    MatSnackBarModule
  ],
  exports: [
    MatCardModule,
    MatTabsModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatGridListModule,
    HttpClientModule,
    MatSnackBarModule
  ]
})
export class SharingModule {}
