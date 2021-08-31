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
  password:string="";
  confirm:string="";
  
  
  register() {
    
    let name=this.name;

    let email=this.email;

    let password =this.  password;
    
    let confirm=this.confirm;
    
    switch(true)
    {
        case (name==null):
        {
         alert("name can't be empty");
         break;
    }
    case (email==null):
    {
    
        alert("Email can't be empty");
        break;
    }
    case (password.length < 8):
    {
        alert("password is less than 8 charactors");
        break;
    }
     default:{
             // backend
             let registerObj = {
                "name": name,
                "email": email,
                "password": password,
                "role": "USER"
            };

        console.log(registerObj); //for printing in console 

      const url = "https://product-mock-api.herokuapp.com/giftshopapp/api/v1/auth/register";//registration url
      axios.post(url, registerObj).then(res => {

                console.log(res);//printing in console // for user purpose
                alert("Registration is succesful");
                window.location.href = "login()";
            }).catch(err => {
                console.error(err);
                alert("Unable to register");
            });

        }
    }
    
}
    }
  



