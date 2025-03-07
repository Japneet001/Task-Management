import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from './task';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  baseUrl = 'http://localhost:9000/tasks';
  constructor(private httpClient: HttpClient) {}
  createTask(task: Task): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}/create-task`, task);
  }
  getTaskList(): Observable<Task[]> {
    return this.httpClient.get<Task[]>(`${this.baseUrl}/view-tasks`);
  }
  getTaskById(id: number): Observable<Task> {
    return this.httpClient.get<Task>(`${this.baseUrl}/find-task/${id}`);
  }
  updateTaskById(id: number, task: Task): Observable<Object> {
    return this.httpClient.put(`${this.baseUrl}/update-task/${id}`, task);
  }
  deleteTask(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseUrl}/delete-task/${id}`);
  }
}
