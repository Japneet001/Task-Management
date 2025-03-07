import { Component } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  userObj!: User;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.userObj = new User();
  }

  checkLogin() {
    this.userService.checkLogin(this.userObj).subscribe((data) => {
      if (data) {
        localStorage.setItem('user', this.userObj.username);
        Swal.fire({
          icon: 'success',
          title: 'Login Successful',
          showConfirmButton: false,
          timer: 1500,
        });
        this.router.navigate(['/list-tasks']);
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Invalid Username or Password',
          text: 'Please try again!',
        });
      }
    });
  }
}
