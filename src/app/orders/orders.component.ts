import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})

export class OrdersComponent implements OnInit {
  orders: any;
  constructor(private Adminservice: AdminService) { }

  ngOnInit(): void {
    this.order();
  }
  order() {
    try {
      let data = this.Adminservice.getAllOrders();
      data.then((res: any) => {
        let datas = res.data.rows;
        let value = datas.map((obj: any) => obj.doc);
        console.log(this.orders);
        this.orders = value;
        console.log(value);

      }).catch ((err: any) => {
        alert("error")
        console.log(err.response.message);

      });
    }
    catch {
      (err: any) => {
        console.log(err.message);
        alert(err.message.response);
        alert("cant add products");
      }
    }
  }

}

