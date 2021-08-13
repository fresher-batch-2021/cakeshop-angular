import { Component, OnInit } from '@angular/core';
import axios from 'axios';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit 
{
 

  constructor() { }

  ngOnInit(): void {
  }
  LoginEmail:string="";
  LoginPassword:string="";
 
  Login()
  {
     let email=this.LoginEmail;
     let password=this.LoginPassword;

     switch(true)
     {
     case (email==""||email==null||email.trim()==""):
     {
          alert("Invalid emailId");
          break;
     }
     case(password.trim()==""):
     {
       alert("Invalid password");
       break;
     }
     default:{
       const loginObj={
       "email":email,
       "password":password
      };
      const url="https://product-mock-api.herokuapp.com/cakeshopapp/api/v1/auth/login";
      console.log(loginObj);
      axios.post(url).then(res=>{
         console.log(loginObj);
         alert("successfully logged in");
         window.location.href
      }).catch(err=>{
        console.log(err.response.data);
        if (err.response.data.errorMessage)
         {
          alert(err.response.data.errorMessage);
        }
        else
        {
          alert("login failed");
        }
      });
     }
    }
  }

}
