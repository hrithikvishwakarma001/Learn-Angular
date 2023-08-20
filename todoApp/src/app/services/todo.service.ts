import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Todo } from '../Todo';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private apiUrl = 'https://calico-global-error.glitch.me/todos';
  constructor(private http: HttpClient) {}
  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.apiUrl);
  }
  deleteTodo = (todo: Todo): Observable<Todo> => {
    const url = `${this.apiUrl}/${todo.id}`;
    return this.http.delete<Todo>(url);
  };
  toggleReminder = (todo: Todo): Observable<Todo> => {
    const url = `${this.apiUrl}/${todo.id}`;
    return this.http.put<Todo>(url, todo, httpOptions);
  };
}
