import { Component } from '@angular/core';
import {
  Router,
  RouterLink,
  RouterModule,
  RouterOutlet,
} from '@angular/router';
import { UserService } from '../user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [RouterOutlet, RouterLink, RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  constructor(private userService: UserService, private router: Router) {}
  isLoggedIn(): boolean {
    return localStorage.getItem('user') !== null;
  }
  logout() {
    this.userService.logout();
    this.router.navigate(['/login']);
  }
  isLoginPage(): boolean {
    return this.router.url === '/login';
  }
}
