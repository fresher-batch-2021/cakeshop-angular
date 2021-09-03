import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class OrderService {
  
  myUrl: any;
  
  headers: any;
  collection: string;



  constructor(private http: HttpClient) {
    this.collection="cakeshop_orders"
   
    this.myUrl = environment.myUrl;
    

  }
  getAllOrders() {
    const url = this.myUrl + "cakeshop_orders/_all_docs?include_docs=true";
    return this.http.get(url);
  }

  getOrder(id: string) {
    const url = this.myUrl +this.collection+ id;
    return this.http.get(url);
  }


  updateOrder(orderObj: string) {
    const url = this.myUrl +this.collection+ orderObj;
    return this.http.get(url);
  }

}
