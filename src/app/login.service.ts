import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  myUrl: any;
  basicAuth: any;
  headers: any;

  collectionName = "cakeshop_user"

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
  return this.http.post(environment.myUrl+ this.collectionName+"/_find",loginObj);
  }
}
