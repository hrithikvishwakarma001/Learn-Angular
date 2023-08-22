import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';
@Component({
  selector: 'app-create-todo-component',
  templateUrl: './create-todo-component.component.html',
  styleUrls: ['./create-todo-component.component.css'],
})
export class CreateTodoComponentComponent {
  @Output() onAddTodo: EventEmitter<Todo> = new EventEmitter();
  text!: string;
  reminder: boolean = false;
  constructor() {}
  onSubmit() {
    if (!this.text) {
      alert('Please add a task');
      return;
    }
    const newTodo = {
      text: this.text,
      day: new Date().toLocaleDateString(),
      reminder: this.reminder,
    };
    this.onAddTodo.emit(newTodo);
  }
}
