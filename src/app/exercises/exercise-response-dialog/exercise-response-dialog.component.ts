import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {CommentService} from "../../../services/CommentService";
import {DomSanitizer} from "@angular/platform-browser";
import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-exercise-response-dialog',
  templateUrl: './exercise-response-dialog.component.html',
  styleUrls: ['./exercise-response-dialog.component.css']
})
export class ExerciseResponseDialogComponent implements OnInit {

  response: string

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.response = this.data.data;
  }

  ngOnInit(): void {}

}
