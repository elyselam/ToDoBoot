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

  todos: any
  newTodo: any = new ToDo("", "", false);

  isUpdate: boolean;
  

  constructor(private toDosService: TodosService) { }

  ngOnInit() {
    this.getAll();
    // this.toDosService.refreshTodos.subscribe(items=> this.todos = items);
    
  }
  addToDo() {
    console.log(this.newTodo);
    //call post request method defined in service
    // subscribe to this response coming from Spring, returning each ToDo
    this.toDosService.create(this.newTodo).subscribe(item => {

      this.getAll();  
        return item; //returning a ToDo item in Spring RequestBody
      })  
  }

  getAll() {
    this.toDosService.getAll().subscribe(items => {
      console.log(items);
      this.todos = items;
    })
  }

  completed(item) {
    item.completed = true;
    console.log(this.newTodo)
    this.toDosService.update(item).subscribe(todo => console.log(todo));
  }


  deleteAll() {
    this.toDosService.deleteAll().subscribe(); //sends back status code
    this.getAll();
  }

  showUpdateForm() {
    this.isUpdate = true;
  }

  updateToDo(item){   
    // title = this.updateToDo;
    // description = this.updateToDo;
    // // item.description = "lam";
    this.toDosService.update(item).subscribe();
  }

}
