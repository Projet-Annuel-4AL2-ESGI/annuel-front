import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'annuel-front';
  opened: any;

  currentUser = localStorage.getItem('currentUser')

  logout() {
    localStorage.removeItem('currentUser')
    window.location.reload()
  }
}
