import { Component, OnInit } from '@angular/core';
import { NgFor,NgIf,UpperCasePipe,DatePipe,LowerCasePipe } from '@angular/common';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


export class Todo{
  constructor(
    public id:number,
    public description:string,
    public done:boolean,
    public targetDate:Date
  ){
   
  }
}
@Component({
  selector: 'app-list-todos',
  standalone: true,
  imports: [NgFor,NgIf,UpperCasePipe,DatePipe,LowerCasePipe,HttpClientModule],
  templateUrl: './list-todos.component.html',
  styleUrl: './list-todos.component.css',
  
})


export class ListTodosComponent implements OnInit {

  todos: Todo[] = [];
  message:string='';
  // =[ 
  //   new Todo(1,'read books',false,new Date()),
  //   new Todo(2,'morning walk',false,new Date()),
  //   new Todo(3,'play guitar',false,new Date())
    // {
    //   id:1,
    //   description:'read books'
    // },
    // {
    //   id:2,
    //   description:'morning walk'
    // },
    // {
    //   id:3,
    //   description:'play guitar'
    // },
  
  constructor(private todoService:TodoDataService,
    private router:Router
  ){}
  ngOnInit(): void {

    this.refreshTodos();//refreshes when list-todo component is intialised
      
  }

  refreshTodos()
  {
    this.todoService.retrievAllTodos('Nani').subscribe(
      response=>{
        console.log(response);
        this.todos=response;
      },
      error=>console.log(error.error)
    );
  }

  deleteTodo(id:number)
  {
    console.log(`deleted todo ${id}`);
    this.todoService.deleteTodo('Nani',id).subscribe(
      response=>{
        console.log(response);
        this.message=`Delete of Todo ${id} Successful!`;
        this.refreshTodos();
      }
    );
    //refreshes automatically when deleted
  }

  updateTodo(id:number)
  {
    console.log(`update todo ${id}`);
    this.router.navigate(['todos',id]);
  }

  addTodo()
  {
    this.router.navigate(['todos',-1]);
  }

}
