import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})

export class OrdersComponent implements OnInit {
  orders:any;
  constructor() { }

  ngOnInit(): void {
    this.order();
  }
  order()
  {
     let data=ProductService.getProducts();
     data.res((res:any)=>
     {
       let data=res.data.rows;
       let values=data.map((obj:any)=>obj.doc);
       console.log(this.orders);
       this.orders=values;
       console.log(values);
    )}.catch((err:any)=>
      {
         console.log(err.response.message);
         
         
      })

     };
