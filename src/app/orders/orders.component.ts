import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})

export class OrdersComponent implements OnInit {
  orders: any;
  constructor(private Adminservice: AdminService,private route:Router,private toastr:ToastrService,private spinner:NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show();
    this.order();
  }
  order() {
    try {
      let data = this.Adminservice.getAllOrders();
      data.subscribe((res: any) => {
        let datas = res.rows;
        let value = datas.map((obj: any) => obj.doc);
        console.log(this.orders);
        this.orders = value;
        setTimeout(()=>{
          this.spinner.hide()
        },1000)
        console.log(value);

      },(err: any) => {
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
  update(productObj:any)
  {
    productObj.status="DELIVERED";
    this.toastr.success("Order is Delivered")
    this.Adminservice.status(productObj).subscribe((res:any)=>
     {
      this.route.navigate(['/orders'])
     })
  }

  getTotalQuantity(items:any){
    let total = 0;
    for(let item of items){
      total+=item.quantity;
    }
    return total ;
  }
  

}

