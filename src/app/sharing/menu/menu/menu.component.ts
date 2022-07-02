import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isLogedIn = localStorage.getItem('currentUser');


  constructor() {
  }

  ngOnInit(): void {
  }

  logout() {
    localStorage.removeItem('currentUser')
    window.location.reload()
  }

}
