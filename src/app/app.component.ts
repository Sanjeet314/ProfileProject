import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  isSideNavOpen = false;

  constructor() {}

  toggleSideNav() {
    this.isSideNavOpen = !this.isSideNavOpen;
  }

  get contentMargin() {
    return this.isSideNavOpen ? '250px' : '0'; // based on side nav width
  }

}
