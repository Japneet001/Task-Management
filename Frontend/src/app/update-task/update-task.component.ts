import { Component } from '@angular/core';
import { Task } from '../task';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../task.service';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-task',
  imports: [FormsModule],
  templateUrl: './update-task.component.html',
  styleUrl: './update-task.component.css',
})
export class UpdateTaskComponent {
  tId!: number;
  tObj: Task = new Task();

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService,
    private router: Router
  ) {}

  ngOnInit() {
    this.tId = this.route.snapshot.params['id'];
    this.taskService.getTaskById(this.tId).subscribe((data) => {
      this.tObj = data;
    });
  }

  updateTask() {
    this.taskService.updateTaskById(this.tId, this.tObj).subscribe((data) => {
      Swal.fire({
        icon: 'success',
        title: 'Task Updated Successfully',
        showConfirmButton: false,
        timer: 1500,
      });
      this.router.navigate(['/list-tasks']);
    });
  }

  goBack() {
    this.router.navigate(['/list-tasks']);
  }
}
