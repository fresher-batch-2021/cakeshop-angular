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
  phoneNumber:number=0;
  password:string="";
  confirmPassword:string="";
  register()
  {
     
     const name=this.name;
     const email=this.email;
     const password =this.password;
     const confirm=this.confirmPassword;
  
 if(this.name ==null||this.name.trim() == "" ) 
 {
  alert("Name Cant be Blank");
  }
  else if(this.email =="")
    {
      alert("Email Cant be Blank");
    }
  else if (this.password!=this.confirmPassword)
         {
          alert("Password Does Not Match");   
             }
             else
             {
              let regObj = {
                "name": this.name,
                "email": this.email,
                "mobileNo": this.phoneNumber,
                 "password": this.password
                };
            console.log(regObj);
            const url="https://99560248-15e7-4158-bfde-3c13e3ebf4e9-bluemix.cloudantnosqldb.appdomain.cloud/cakeshop_user";
            axios.post(url,regObj).then(res=>{
                const data=res.data;
                console.log(data);
                alert(res.data.message);
                alert("Successfuly Register")
                window.location.href = "login()";
            } ).catch(err=>{
              console.error(err.response.data);
              let errorMessage = err.response.data.errorMessage;
              // alert("Error:" + errorMessage);
            });
             }
      }
        
    }
  



