import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-left',
  templateUrl: './home-left.component.html',
  styleUrls: ['./home-left.component.css']
})
export class HomeLeftComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  json = [
    {
      "user": {"name": "henri", "lastname": "bg"},
    },
    {
      "user": {"name": "adri", "lastname": "charo"},

    },
    {
      "user": {"name": "cheplus", "lastname": "bg"},

    },
    {
      "user": {"name": "zouk", "lastname": "bg"},
    },
  ]

}
