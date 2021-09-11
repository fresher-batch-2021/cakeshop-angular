import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {  NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from '../product.service';
import { ValidationService } from '../validation.service';

@Component({
  selector: 'app-add-product-stock',
  templateUrl: './add-product-stock.component.html',
  styleUrls: ['./add-product-stock.component.css']
})
export class AddProductStockComponent implements OnInit { 
  

  id: string;
  constructor(private route: ActivatedRoute, private router:Router, private validator: ValidationService, private productService: ProductService, private toastr: ToastrService,private spinner:NgxSpinnerService) {
    this.id = this.route.snapshot.params["id"];
   
  }
  productName: string = "";
  
  imageUrl: string = "";

  quantity: number = 0;
  ngOnInit(): void {
   
  this.getProduct();
  this.spinner.show();
}

onFileUpload(event: any) {
  this.imageUrl = event.target.files[0].name;
}

product: any;

getProduct() {
  this.productService.getProduct(this.id).subscribe((res: any) => {
    console.log(res);
    setTimeout(()=>{
      this.spinner.hide()
    },1500)
    this.product = res;
      
    console.log(res)
  });
}

stockQuantity = 0;

type = "ADD";

edit() {


  try {

    
    
    if(this.type=="ADD"){
    this.product.quantity = this.product.quantity + this.stockQuantity;
    }
    else if (this.type=="RETURN"){
      this.product.quantity = this.product.quantity - this.stockQuantity;
    }
    
    console.log(this.product);
    this.productService.updateProduct(this.product)
      .subscribe((res: any) => {
        let data = res;
        console.log(res)
        this.toastr.success("Item is Updated ");
        this.router.navigateByUrl("products");

      });
  }
  catch (err) {
    console.error(err);
    this.toastr.error("Updated Failed ")
  }

}



}