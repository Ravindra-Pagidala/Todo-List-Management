import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../list-todos/list-todos.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [FormsModule, HttpClientModule, DatePipe, NgIf],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent implements OnInit {

  id: number = -1;
  todo: Todo = new Todo(this.id, '', false, new Date());
  dateWarning: boolean = false;

  constructor(
    private todoService: TodoDataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    if (this.id != -1) {
      this.todoService.retrieveTodo('Nani', this.id).subscribe(
        data => this.todo = data
      );
    }
  }

  validateDate(selectedDate: string) {
    const today = new Date();
    const targetDate = new Date(selectedDate);

    this.dateWarning = false;

    today.setHours(0, 0, 0, 0);

    if (targetDate < today) {
      this.dateWarning = true;
    } else {
      this.todo.targetDate = targetDate;
    }
  }

  saveTodo() {
    if (this.id == -1) {
      this.todoService.createTodo('Nani', this.todo).subscribe(data => {
        this.router.navigate(['todos']);
      });
    } else {
      this.todoService.updateTodo('Nani', this.id, this.todo).subscribe(data => {
        this.router.navigate(['todos']);
      });
    }
  }
}
