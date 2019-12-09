import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';
import { HttpClient } from '@angular/common/http';
import { ToDo } from '../todo.model';

@Component({
  selector: 'app-add-to-do',
  templateUrl: './add-to-do.component.html',
  styleUrls: ['./add-to-do.component.css']
})
export class AddToDoComponent implements OnInit {

  newTodo: any = new ToDo("", "");
  url = "http://localhost:8080/home";
  


  constructor(private toDoService: TodosService,
    private httpClient: HttpClient) { }

  ngOnInit() {
  }

  // // //without service:
  // addToDo() {
  //   this.httpClient.post(this.url, this.newTodo).subscribe(item => {
  //     console.log(item);
  //   })
  // }

  addToDo() {
    console.log(this.newTodo);
    //call post request method defined in service
    // subscribe to this response coming from Spring, returning each ToDo
    this.toDoService.create(this.newTodo).subscribe(item => {

        return item; //returning a ToDo item in Spring RequestBody
      })
    
    
  }

}
