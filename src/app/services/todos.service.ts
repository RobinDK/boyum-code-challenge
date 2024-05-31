import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TodoListModel } from '../models/todo-list';
import { Observable, catchError, map } from 'rxjs';
import { ToDoDetailsModel } from '../models/todo-details';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(
    private http: HttpClient
  ) { }

  GetToDoList(): Observable<TodoListModel[]> {
    let url = 'https://boyumcodechallenge.azurewebsites.net/api/todolist';
    return this.http.get<TodoListModel[]>(url).pipe(catchError((err, caught) => caught));
  }

  GetToDoDetails(id: number): Observable<ToDoDetailsModel[]> {
    let url = 'https://boyumcodechallenge.azurewebsites.net/api/todolist';
    return this.http.get<ToDoDetailsModel[]>(url).pipe(map(x => x.filter(i => i.Id == id)), catchError((err, caught) => caught));
  }
}
