import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';




@Injectable({
  providedIn: 'root'
})
export class AdminService {
 
  myUrl: any;
  headers: any;

  constructor(private http:HttpClient)
   {
  
    this.myUrl = environment.myUrl;
 }
  getAllProducts()
  {
    const url=this.myUrl+"cakeshop_cakes/_all_docs?include_docs=true";
    return  this.http.get(url);
    
}
getAllOrders()
{
  const url=this.myUrl+"cakeshop_orders/_all_docs?include_docs=true";
  return  this.http.get(url);
  
}
status(productObj:any)
{
  const url=this.myUrl+"cakeshop_orders/"+productObj._id;
  return  this.http.put(url,productObj);
  
}

}