import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email: string;
  password: string;
  registerForm: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private httpClient: HttpClient) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    
    })
  }

  onSubmit() {
    console.log("butt");
    
    this.httpClient.post("http://localhost:8080/register", this.registerForm.value).subscribe(data => {
      console.log(data);
      if (data =="CREATED") {
        console.log("registered!!!");
        this.router.navigate([""]);
      } else {
        alert("nope!");
      }
    
    })
  }
}   

  


