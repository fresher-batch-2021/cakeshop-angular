import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrls: ['./addproducts.component.css']
})
export class AddProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  product = {
    productName :"",
    price: 0,
    imageUrl :"",
    quantity: 1
  }


  addProduct(){
console.log(this.product);
  }

}
