import { Component } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-task',
  imports: [FormsModule],
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.css',
})
export class CreateTaskComponent {
  taskObj: Task = new Task();

  constructor(private taskService: TaskService, private router: Router) {}

  ngOnInit() {}

  storeValue() {
    this.taskService.createTask(this.taskObj).subscribe(
      (data) => {
        Swal.fire({
          icon: 'success',
          title: 'Task Created Successfully',
          showConfirmButton: false,
          timer: 1500,
        });
        this.router.navigate(['/list-tasks']);
      },
      (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Failed to Create Task',
          text: 'Please try again!',
        });
      }
    );
  }
}
