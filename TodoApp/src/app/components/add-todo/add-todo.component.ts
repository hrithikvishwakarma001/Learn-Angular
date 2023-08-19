import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent {
  @Output() todoAdded = new EventEmitter<string>();

  newTodo: string = '';

  addTodo(): void {
    console.log(this.newTodo);
    if (this.newTodo.trim() !== '') {
      this.todoAdded.emit(this.newTodo);
      this.newTodo = '';
    }
  }
}
