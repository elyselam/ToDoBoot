import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TodosService } from '../todos.service';
import { ToDo } from '../todo.model';
import { not } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  todos: any
  newTodo: any = new ToDo("", "", false);

  isUpdate: boolean;
  isComplete: boolean;

  notCompleteItems: any = [];
  completedItems: any = [];
  

  constructor(private toDosService: TodosService) { }

  ngOnInit() {
    this.getAll();
    // this.toDosService.refreshTodos.subscribe(items=> this.todos = items);
    this.showCompleted();
    
    
  }
  addToDo() {
    console.log(this.newTodo);
    //call post request method defined in service
    // subscribe to this response coming from Spring, returning each ToDo
    this.toDosService.create(this.newTodo).subscribe(item => {
       //refreshes new todos to list 
      this.getAll();  
      return item; //returning a ToDo item in Spring RequestBody
    })  
  }

  getAll() {
    this.toDosService.getAll().subscribe(items => {
      // console.log(items);
      // this.todos = items;

      for(let i in items) {
        if (!items[i].completed) {
          this.notCompleteItems.push(items[i]);
        }
      }
      this.todos = this.notCompleteItems;
    })
  }

  completed(item) {
    item.completed = true;
    console.log(this.newTodo)
    this.toDosService.update(item).subscribe(todo => console.log(todo));
    //delete and moved to the Completed component 
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


  showCompleted() {
    
    this.toDosService.getAll().subscribe(item => {

      //console.log(item);
      for (let i in item) {

        console.log(i);
        console.log(item[i]);
          if (item[i].completed) {
            this.completedItems.push(item[i]);

          }
      }
      console.log(this.completedItems);
       })
      
  }

}
