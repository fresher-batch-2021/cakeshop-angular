import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';
import { LoginService } from '../login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit 
{
  constructor(private router:Router,private loginService:LoginService) { }

  ngOnInit(): void {
  }
  email:any;
  password:any;
 
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
     
      this.loginService.login(email,password).then((res:any)=>{
        let data=res.data.docs[0];
        console.log(data)
        if(data.role=="ADMIN"){
          this.router.navigate(['products']);
        }
        else{
          this.router.navigate(['login'])
        }
      });
      
    
     }
    }
  }


}
