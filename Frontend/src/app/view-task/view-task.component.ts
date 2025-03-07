import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../task.service';
import { Task } from '../task';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-task',
  imports: [CommonModule],
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css'],
})
export class ViewTaskComponent {
  id!: number;
  task: Task = new Task();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private taskService: TaskService
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.taskService.getTaskById(this.id).subscribe((data) => {
      this.task = data;
    });
  }

  backToList() {
    this.router.navigate(['/list-tasks']);
  }
}
