import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-list-component',
  templateUrl: './todo-list-component.component.html',
  styleUrls: ['./todo-list-component.component.css'],
})
export class TodoListComponentComponent implements OnInit {
  todos: Todo[] = [];
  constructor(private todoService: TodoService) {
    console.log('constructor', this.todos);
  }
  ngOnInit(): void {
    this.todoService.getTodos().subscribe((todos) => {
      this.todos = todos;
    });
  }
  onDeleteTodoItem(todo: Todo) {
    console.log(todo);
    this.todoService.deleteTodo(todo).subscribe(() => {
      this.todos = this.todos.filter((t) => t.id !== todo.id);
    });
  }
  onEditTodoItem(todo: Todo) {
    const promtMessage = prompt('Edit Todo Item');
    if (promtMessage) {
      this.todoService.editTodoItem(todo).subscribe(() => {
        this.todos = this.todos.map((t) =>
          t.id === todo.id ? { ...todo, text: promtMessage } : t
        );
      });
    }
  }
  onToggle = (todo: Todo) => {
    todo.reminder = !todo.reminder;
    this.todoService.toggleReminder(todo).subscribe();
  };
  onAddTodo=(newTodo:Todo)=>{
    this.todoService.addTodoItem(newTodo).subscribe((todo)=>{
      this.todos.push(todo)
    })
  }
}
