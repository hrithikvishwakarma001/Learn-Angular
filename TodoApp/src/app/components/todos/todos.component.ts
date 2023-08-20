import { Component } from '@angular/core';
import { Todo } from 'src/app/Todo';
import { TODOS } from 'src/app/mock-todos';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent {
  todos: Todo[] = TODOS;
  constructor() {
    this.todos = TODOS;
  }
}
