import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  title: string = 'My Store';
  constructor(public auth: AuthService) {}
  loginWithRedirect() {
    // go inside loginWithRedirect({appState: {target: '/cart'}}) to set return page
    this.auth.loginWithRedirect({appState: {target: '/cart'}}); 
  }

  logOut() {
    this.auth.logout();
  }
}
