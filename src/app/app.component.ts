import { Component } from '@angular/core';
import { UserService } from './shared/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'auth-guard';

  constructor(private userService: UserService, private router: Router) { }

  loginUser() {
    this.userService.isUserLoggedIn = true;
  }
  logoutUser() {
    this.userService.isUserLoggedIn = false;
    this.router.navigate(['/'])
  }
}
