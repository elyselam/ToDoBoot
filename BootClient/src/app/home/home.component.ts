import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TodosService } from '../todos.service';
import { ToDo } from '../todo.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  todos: ToDo[];
  constructor(private toDosService: TodosService) { }

  ngOnInit() {
    this.getAll();

    
  }


  getAll() {
    this.toDosService.getAll().subscribe(items => {
      console.log(items);
      this.todos = items;
    })
  }




}
