import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  name:string="";
  email:string="";
  phoneNumber:string="";
  password:string="";
  confirmPassword:string="";
  register()
  {
     alert("Register Button Clicked");
  
 if(this.name ==null||this.name.trim() == "" ) 
 {
  alert("Name Cant be Blank");
  }
  else
  {
    if(this.email =="")
    {
      alert("Email Cant be Blank");
    }
      else
      {
        if (this.password!=this.confirmPassword)
         {
          alert("Password Does Not Match");   
             }
             else
             {
              const regObj = {
                "name": this.name,
                "email": this.email,
                "mobileNo": this.phoneNumber,
                 "password": this.password
                };
            console.log(regObj);
            const url="https://product-mock-api.herokuapp.com/cakeshopapp/api/v1/auth/register";
            axios.post(url,regObj).then(res=>{
                let data=res.data;
                console.log(data);
                alert("Successfully Register");
                window.location.href = "login()";
            } ).catch(err=>{
                console.error(err);
                alert("not Register");
            });
             }
      }
        
    }
  }

}

