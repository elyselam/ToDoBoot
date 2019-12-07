import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToDo } from './todo.model';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  url = "http://localhost:8080/home";


  constructor(private httpClient: HttpClient) { }

  create(newTodo: ToDo) {
    if (!newTodo) {
      alert('input something!');
      return;
    }

    console.log(newTodo);
    return this.httpClient.post(this.url, newTodo).pipe(map(res => {
      res as any
    }));
  }

  getAll() {
    return this.httpClient.get(this.url);

  }

  update() {

  }

  delete() {

  }

  removeCompleted() {

  }

  createCompleted() {

  }

}
