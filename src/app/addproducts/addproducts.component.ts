import { Component, OnInit } from '@angular/core';
import { ValidationService } from '../validation.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrls: ['./addproducts.component.css']
})
export class AddProductsComponent implements OnInit {

  constructor(private validator:ValidationService) { }
  productName:string="";
productPrice:number=0;
productImage:any;
productQuantity:number=0;


  ngOnInit(): void {
  }

  product = {
    productName :"",
    price: 0,
    imageUrl :"",
    quantity: 0
  }


  addProduct()
  {
   
   let name=this.productName;
   let price=this.productPrice;
   let image=this.productImage;
   let quantity=this.productQuantity;
   try
   {
     this.validator.ValidateName(name,"Enter your name")
     let productObj={
       name=name,
       price=price,
       imageUrl=image,
       quantity=quantity
     };
     addProduct.addDatas(productObj).then(res=>
      {
        let data=res.data;
        console.log(data);
        alert("working");
     }).catch(err=>
      {
        console.log(err.response.message);
        alert("error");

      });
      catch(err)
      {
        console.log(err.message);
        alert(err.message.response);
        alert("cant add products");
      }
   }
  }

}
