import { Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGaurdService } from './service/route-gaurd.service';
import { TodoComponent } from './todo/todo.component';

export const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'login', component:LoginComponent},
  {path:'welcome/:name', component:WelcomeComponent,canActivate:[RouteGaurdService]},
  {path:'todos', component:ListTodosComponent,canActivate:[RouteGaurdService]},
  {path:'logout', component:LogoutComponent,canActivate:[RouteGaurdService]},
  {path:'todos/:id', component:TodoComponent,canActivate:[RouteGaurdService]},
  {path:'**', component:ErrorComponent}
];
