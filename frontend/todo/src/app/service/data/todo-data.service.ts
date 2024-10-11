import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../../list-todos/list-todos.component';
import { API_URL, TODO_JPA_API_URL } from '../../app.constants';
//no need to create todo class for exepecting return type in http response...import from list-todo as it's already structured

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {
  

  constructor(
    private http:HttpClient
  ) { }

  
  retrievAllTodos(username:string)
  { 
    //expecting array to return
    return this.http.get<Todo[]>(`${TODO_JPA_API_URL}/users/${username}/todos`);
  }

  retrieveTodo(username:string,id:number)
  {
    //expecting Todo class's obj to return
    return this.http.get<Todo>(`${TODO_JPA_API_URL}/users/${username}/todos/${id}`);
  }

  deleteTodo(username:string,id:number)
  {
    return this.http.delete(`${TODO_JPA_API_URL}/users/${username}/todos/${id}`);
  }

  updateTodo(username:string,id:number,todo:Todo)
  {
    return this.http.put(`${TODO_JPA_API_URL}/users/${username}/todos/${id}`,todo);
  }

  createTodo(username:string,todo:Todo)
  {
    return this.http.post(`${TODO_JPA_API_URL}/users/${username}/todos`,todo);
  }
}

