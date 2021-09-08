import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { OrderService } from '../order.service';
import * as _ from 'lodash';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private adminService: AdminService, private OrderService: OrderService,private spinner:NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show();
    this.orderChart();
  }
  orders: any;
  amount: any;
  dashBoard() {
    this.OrderService.getAllOrders().subscribe((res: any) => {
      let data = res.rows.map((obj: any) => obj.doc);
      console.log(data);
      
    });
  }
  report :any;

  getOrderAmount(order:any){
    let totalAmount = 0;
    let products = order.products;
    products.forEach( (obj:any)=>{
      totalAmount += obj.price;
    })
    return totalAmount;
 
  }

  prepareRevenueChartData(orders:any){
    //group by date
    let salesData = _.groupBy(orders, 'date');
      console.table(salesData)
      let keys = Object.keys(salesData);
      console.table('keys',keys);
      this.revenueData = [];
      
        for(let orderDate of keys){
            console.log(orderDate);
            let totalAmount = 0;
            let sales = salesData[orderDate];
            console.table(sales);
            //iterate orders and get total amount
            for(let sale of sales){
              console.log(sale);
              totalAmount += sale.totalAmount;                
            }
            let column = [ orderDate, totalAmount];
            this.revenueData.push(column); //store in chart data array
        }
        console.log(this.revenueData);

  }

  orderChart() {
    this.OrderService.getAllOrders().subscribe((res: any) => {
      let orders = res.rows.map ((obj:any)=> obj.doc);
      console.table(orders);
      setTimeout(() => {
        this.spinner.hide();
      }, 1500);
      this.prepareRevenueChartData(orders);
      
    });
  }
  


myType: any = 'ColumnChart';
PieChart: any = 'PieChart';
pointSize: any = 30;
revenueData: any = [];
productData:any = [];


//    ['London', 1],
//    ['New York', 15],
//    ['Paris', 2],
//    ['Berlin', 3],
//    ['Kairo', 1]
// ];
barData: any = [];
/*
    ['London', 1],
    ['New York', 15],
    ['Paris', 2],
    ['Berlin', 3],
    ['Kairo', 1]
  ];*/
options = {
  'title': 'Total products sold',
  'width': 500,
  'height': 250,
  'is3D': true
};


rowChartOptions = {
  'title': 'Daily Sales',
  'width': 500,
  'height': 250,
};

  }

