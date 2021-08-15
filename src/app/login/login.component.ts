import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit 
{
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  email:string="";
  password:string="";
 
  Login()
  {
     let email=this.email;
     let password=this.password;

     switch(true)
     {
     case (email==""||email==null||email.trim()==""):
     {
          alert("Invalid emailId");
          break;
     }
     case(password.trim()==""):
     {
       alert("Invalid Password");
       break;
     }
     default:{
      let url="https://product-mock-api.herokuapp.com/cakeshopapp/api/v1/auth/login";
       let loginObj={
       "email":email,
       "password":password
      };
      
      console.log(loginObj);
      axios.post(url,loginObj).then(res=>{
        const data=res.data;
         console.log(loginObj);
         alert("successfully logged in");
         window.location.href="home()";
      }).catch(err=>{
        console.log(err.response.data);
        let errormessage=err.response.data.errorMessage;
         
          alert("error:"+errormessage); 
      });
     }
    }
  }

}
