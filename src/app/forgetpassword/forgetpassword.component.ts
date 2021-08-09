import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {

  constructor() { }

  ngOnInit(): void  {
 }
 forgetPasswordEmail:string="";
 forgetPasswordPassword:string="";
 forgetPasswordconfirmPassword:string="";
 forgetPassword()
 {
    if (this.forgetPasswordEmail=="")
     {
      alert("email cant be blank");
    }
    else
    {
      if (this.forgetPasswordPassword!=this.forgetPasswordconfirmPassword)
       {
         alert("password does not match");
      }
    }
 }
}
