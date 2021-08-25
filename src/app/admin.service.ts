import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  dbUsername = "apikey-v2-237a9fx60g51gyopiewwx5pb339t2r1xw085fzt3skgx";
dbPassword = "85e4a7e36372ac1e47c80f4b81a78d62";
basicAuth = "Basic " + btoa(this.dbUsername + ":" + this.dbPassword);
myUrl="https://99560248-15e7-4158-bfde-3c13e3ebf4e9-bluemix.cloudantnosqldb.appdomain.cloud/cakeshop_cakes/";


  constructor() { }
  async getAllProducts(){
    const url=this.myUrl+"_all_docs?include_docs=true";
    const products:any = await axios.get(url,{headers:{Authorization: this.basicAuth}});
    return products.data.rows.map((obj:any)=> obj.doc);
}
}