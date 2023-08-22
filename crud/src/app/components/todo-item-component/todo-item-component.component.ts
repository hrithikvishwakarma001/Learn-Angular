import { Component, Input } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item-component',
  templateUrl: './todo-item-component.component.html',
  styleUrls: ['./todo-item-component.component.css'],
})
export class TodoItemComponentComponent {
  @Input() item!: Todo;
  constructor() {}

  editItem(todo: Todo) {
    console.log('editItem', todo);
  }
  deleteItem(todo: Todo) {
    console.log('deleteItem', todo);
  }
}
