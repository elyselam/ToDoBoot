import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  loginForm: FormGroup;
  url = "http://localhost:8080/";

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private httpClient: HttpClient) {}
  

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]   
    })
  }

  onSubmit() {

    // //data is either CREATED or NOT_FOUND
    // this.httpClient.post(this.url, this.loginForm.value).subscribe(data => console.log(data));
    
    this.httpClient.post(this.url, this.loginForm.value).subscribe(data => {
      if (data == "CREATED") {
        console.log("yes");
        this.router.navigate(["/home"]);
      } else {
        alert("bad credentials");
      }
    }
    

    )}

}
