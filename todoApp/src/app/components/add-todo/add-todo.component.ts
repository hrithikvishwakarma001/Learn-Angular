import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent {
  @Output() onAddTodo: EventEmitter<Todo> = new EventEmitter();
  text!: string;
  reminder: boolean = false;
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
