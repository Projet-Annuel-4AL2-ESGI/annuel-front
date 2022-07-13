import {Component, Inject, OnInit} from '@angular/core';
import { MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-dialog-follow',
  templateUrl: './dialog-follow.component.html',
  styleUrls: ['./dialog-follow.component.css']
})
export class DialogFollowComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

}
