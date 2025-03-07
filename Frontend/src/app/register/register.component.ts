import { Component } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  userObj!: User;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.userObj = new User();
  }

  registerUser() {
    this.userService.registerUser(this.userObj).subscribe((data) => {
      if (data) {
        Swal.fire({
          icon: 'success',
          title: 'Registration Successful',
          showConfirmButton: false,
          timer: 1500,
        });
        this.router.navigate(['/login']);
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Registration Failed',
          text: 'Please try again!',
        });
      }
    });
  }
}
