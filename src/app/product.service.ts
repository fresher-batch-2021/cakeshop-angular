import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  
dbUsername = "apikey-v2-237a9fx60g51gyopiewwx5pb339t2r1xw085fzt3skgx";
dbPassword = "85e4a7e36372ac1e47c80f4b81a78d62";
basicAuth = "Basic " + btoa(this.dbUsername + ":" + this.dbPassword);
myUrl="https://99560248-15e7-4158-bfde-3c13e3ebf4e9-bluemix.cloudantnosqldb.appdomain.cloud/cakeshop_cakes/";

  constructor() { }


  addDatas(productObj:string)
  {
    const url=this.myUrl+productObj;
    return axios.post(url,{headers:{Authorization:this.basicAuth}});
  }

  getProducts()
  {
      const url=this.myUrl+"_all_docs?include_docs=true";
      return axios.get(url,{headers:{Authorization:this.basicAuth}});
    
  }
  deleteData(id:string,rev:string)
  {
    const url=this.myUrl+'/'+id+'?rev='+rev;
    return axios.delete(url,{headers:{Authorization: this.basicAuth}});
  }

}
