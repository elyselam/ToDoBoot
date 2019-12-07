import { Component, OnInit, Input } from '@angular/core';
import { TodosService } from '../todos.service';
import { ToDo } from '../todo.model';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.css']
})
export class CompletedComponent implements OnInit {
  @Input()
  todo: ToDo;
  hide: boolean;
  url = "http://localhost:8080/home";

  constructor(
    private router: Router,
    private httpClient: HttpClient,
  ) { }

  ngOnInit() {
  }

  appendCompleted() {

  
  }

  // removeCompleted() {
  //   let index = this.todo.indexOf(todo);
  //   if (index > -1) {
  //     this.
  //   }
  // }

}
