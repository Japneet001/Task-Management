import { Routes } from '@angular/router';
import { CreateTaskComponent } from './create-task/create-task.component';
import { ListTaskComponent } from './list-task/list-task.component';
import { UpdateTaskComponent } from './update-task/update-task.component';
import { DeleteTaskComponent } from './delete-task/delete-task.component';
import { ViewTaskComponent } from './view-task/view-task.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './auth.guard';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/list-tasks',
    pathMatch: 'full',
  },
  {
    path: 'create-task',
    component: CreateTaskComponent,
    canActivate: [authGuard],
  },
  {
    path: 'list-tasks',
    component: ListTaskComponent,
    canActivate: [authGuard],
  },
  {
    path: 'update-task/:id',
    component: UpdateTaskComponent,
    canActivate: [authGuard],
  },
  {
    path: 'delete-task',
    component: DeleteTaskComponent,
    canActivate: [authGuard],
  },
  {
    path: 'view-task/:id',
    component: ViewTaskComponent,
    canActivate: [authGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
];
