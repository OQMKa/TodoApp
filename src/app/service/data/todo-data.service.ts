import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/list-todo/list-todo.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http: HttpClient) { }
  retrieveAllTodos(username: string): Observable<Todo[]> {
    return this.http.get<Todo[]>(`http://localhost:8080/users/${username}/todos`);
    // console.log("execute Hello World bean Service");
  }
  deleteTodo(username: string, id: number): Observable<void> {
    return this.http.delete<void>(`http://localhost:8080/users/${username}/todos/${id}`);
  }
  retreiveTodo(username: string, id: number) {
    return this.http.get<Todo>(`http://localhost:8080/users/${username}/todos/${id}`);
  }
}
