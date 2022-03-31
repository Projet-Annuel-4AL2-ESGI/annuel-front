import { NgModule } from "@angular/core";
import { MatCardModule } from "@angular/material/card"
import { MatTabsModule } from "@angular/material/tabs"
import { MatInputModule } from "@angular/material/input"
import { MatButtonModule } from "@angular/material/button"
import { FormsModule } from "@angular/forms";
import { MatIconModule } from "@angular/material/icon"
import {MatGridListModule} from "@angular/material/grid-list";

@NgModule({
  declarations: [

  ],
  imports: [
    MatCardModule,
    MatTabsModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatIconModule,
    MatGridListModule
  ],
  exports: [
    MatCardModule,
    MatTabsModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatIconModule,
    MatGridListModule
  ]
})
export class SharingModule {}
