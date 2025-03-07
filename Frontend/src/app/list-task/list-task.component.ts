import { Component } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-task',
  imports: [CommonModule],
  templateUrl: './list-task.component.html',
  styleUrl: './list-task.component.css',
})
export class ListTaskComponent {
  tasks!: Task[];

  constructor(private taskService: TaskService, private router: Router) {}

  ngOnInit() {
    this.getTask();
  }

  getTask() {
    this.taskService.getTaskList().subscribe((data) => {
      this.tasks = data;
    });
  }

  updateTask(tid: number) {
    this.router.navigate(['update-task', tid]);
  }

  deleteTask(id: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this task!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.taskService.deleteTask(id).subscribe(() => {
          Swal.fire({
            icon: 'success',
            title: 'Task Deleted Successfully',
            showConfirmButton: false,
            timer: 1500,
          });
          this.getTask();
        });
      }
    });
  }

  showDetails(tid: number) {
    this.router.navigate(['view-task', tid]);
  }
}
