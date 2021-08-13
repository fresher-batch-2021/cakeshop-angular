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
  registerName:string="";
  registerEmail:string="";
  registermobileNo:string="";
  registerpassword:string="";
  registerconfirmPassword:string="";
  register()
  {
     alert("register button clicked");
  
 if(this.registerName ==null||this.registerName.trim() == "" ) 
 {
  alert("name cant be blank");
  }
  else
  {
    if(this.registerEmail =="")
    {
      alert("Email cant be blank");
    }
    else
    {
      if (this.registermobileNo.length<10)
       {
        alert("please enter the valid number");
      }
      else{
        if (this.registerpassword!=this.registerconfirmPassword)
         {
          alert("password does not match");   
             }
             else
             {
              const regobj = {
                "registerName": name,
                "registerEmail": Email,
                "registermobileNo": mobileNo,
                "registerpassword": password
                
            };
            console.log(regobj);
            const url="https://product-mock-api.herokuapp.com/cakeshopapp/api/v1/auth/register";
            axios.post(url,regobj).then(res=>{
                let data=res.data;
                console.log(data);
                alert("successfully register");
                window.location.href = "login.html";
            } ).catch(err=>{
                console.error(err);
                alert("not register");
            });
             }
      }
        
    }
  }

}
}
