import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import axios from 'axios';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../login.service';
import { ValidationService } from '../validation.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;

  constructor(private router: Router, private loginService: LoginService,
    private fb : FormBuilder, private toastr: ToastrService) 
    { 
      
      this.loginForm = this.fb.group({
        email : new FormControl("", Validators.required),
        password : new FormControl('', Validators.required)
      })
    }

  user: any;
  ngOnInit(): void {
    let userStr = localStorage.getItem('LOGGED_IN_USER');
    this.user = userStr != null ? JSON.parse(userStr) : null;
    console.log(this.user)

    if(this.user != null ){
      this.router.navigate(['products']);
    }

  }

  Login() {
    
    let user = this.loginForm.value;
    console.log("forms value", this.loginForm.value);
    // console.log(this.Login());

      const role = "ADMIN";
      this.loginService.login(user.email, user.password, role).subscribe((res: any) => {
        console.log(res.data);
        let data = res.docs[0];
        console.log(data);
        localStorage.setItem('LOGGED_IN_USER', JSON.stringify(data))

      
        // console.log()
        let userStr = localStorage.getItem('LOGGED_IN_USER');
        let user = userStr != null ? JSON.parse(userStr) : null;
        // let loginStatus=localStorage.setItem(loggedIn);
        if (user.role == "ADMIN") {
          this.toastr.success("Welcome Admin");
          setTimeout(() => {
            this.router.navigate(['products']);
          }, 100);
         
        }
        else {
          this.router.navigate(['login'])
        }
      });


    
  }
}


