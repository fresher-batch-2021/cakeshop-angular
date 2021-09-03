import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

headers:any;
myUrl:any;
  

  constructor(private http:HttpClient) { 
   
this.myUrl=environment.myUrl;

  }
  addDatas(productObj:any)
  {
    
    const url=this.myUrl+"cakeshop_cakes/";
    return this.http.post(url,productObj);
  }

  getProducts()
  {
      const url=this.myUrl+"cakeshop_cakes/_all_docs?include_docs=true";
      return this.http.get(url);
    
  }

  getProduct(id:string)
  {
      const url=this.myUrl+"cakeshop_cakes/"+id ;
      return this.http.get(url);
    
  }

  updateProduct(productObj:any){
    const url=this.myUrl +"cakeshop_cakes/" + productObj._id;
    return this.http.put(url,productObj);
  }
  deleteData(id:string,rev:string)
  {
    const url=this.myUrl+'cakeshop_cakes/'+id+'?rev='+rev;
    return this.http.delete(url);
  }

}
