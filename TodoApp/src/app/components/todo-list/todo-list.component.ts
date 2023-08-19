import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.services';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todos: any[] = [];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.getTodos().subscribe((data: any) => {
      this.todos = data;
    });
  }

  deleteTodo(id: number): void {
    this.todoService.deleteTodo(id).subscribe(() => {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    });
  }

  toggleTodoStatus(id: number): void {
    const todo = this.todos.find((todo) => todo.id === id);
    if (todo) {
      this.todoService.toggleTodoStatus(id, !todo.completed).subscribe(() => {
        todo.completed = !todo.completed;
      });
    }
  }
  handleTodoAdded(newTodoTitle: string): void {
    const newTodo = { title: newTodoTitle, completed: false };
    this.todoService.addTodo(newTodo).subscribe((response) => {
      this.todos.push(response); 
    });
  }
}
