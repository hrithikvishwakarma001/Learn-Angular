import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Todo } from '../Todo';
import { TODOS } from '../mock-todos';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private apiUrl = 'https://calico-global-error.glitch.me/todos';
  constructor(private http: HttpClient) {}
  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.apiUrl);
  }
}
