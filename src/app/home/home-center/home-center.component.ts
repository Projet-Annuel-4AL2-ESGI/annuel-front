import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home-center',
  templateUrl: './home-center.component.html',
  styleUrls: ['./home-center.component.css']
})
export class HomeCenterComponent implements OnInit {

  json = [
    {
      "type":"exo",
      "image":"https://i.imgur.com/V5HN7Rp.png",
      "user": {"name": "henri", "lastname": "bg"},
      "title": "test",
      "text": "here is the text for the exercice"
    },
    {
      "type":"notif",
      "user": {"name": "adri", "lastname": "charo"},
      "title": "Reussi",
      "text": "Le bg reussi l'exo mm avant qu'il soit sorti"
    },
    {
      "type":"exo",
      "image":"https://i.ytimg.com/vi/MSVLYlEIAPc/maxresdefault.jpg",
      "user": {"name": "cheplus", "lastname": "bg"},
      "title": "test",
      "text": "c dynamique quoi comme vous voyez"
    },
    {
      "type":"exo",
      "image":"https://i.imgflip.com/3p80bw.png",
      "user": {"name": "zouk", "lastname": "bg"},
      "title": "test",
      "text": "faudra juste faire les modeles de post et les adapter comme le json dans le .ts"
    },
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
