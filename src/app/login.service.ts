import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  myUrl: any;
  basicAuth: any;
  headers: any;

  constructor(private http:HttpClient)
   {
  
    this.myUrl = environment.myUrl;

    }

  
  login(email:any,password:any, role:string){
    let loginObj={
      selector:{
    email:email,
    password:password,
    role:role
   }
   
  };
  return this.http.post(this.myUrl,loginObj);
  }
}
