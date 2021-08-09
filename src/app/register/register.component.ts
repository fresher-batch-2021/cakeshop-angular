import { Component, OnInit } from '@angular/core';

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
  registerphoneNumber:string="";
  registerpassword:string="";
  registerconfirmPassword:string="";
  register()
  {
     alert("register button clicked");
  
 if(this.registerName =="" ) 
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
      if (this.registerphoneNumber.length<10)
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
               alert("successfully register");
             }
      }
        
    }
  }

}
}
