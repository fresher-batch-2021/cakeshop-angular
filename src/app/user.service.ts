import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  myUrl: any;
  headers:any;

  constructor(private http: HttpClient) {
    
    this.myUrl = environment.myUrl;
  }
  userData() {
    const url = this.myUrl + "cakeshop_user/_all_docs?include_docs=true";
    console.log(url);
    return this.http.get(url );

  }
  deleteData(id: string, rev: string) {
    const url = this.myUrl + '/' + id + '?rev=' + rev;
    return this.http.delete(url);
  }

}
