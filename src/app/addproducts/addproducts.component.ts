import { Component, OnInit } from '@angular/core';
import { ValidationService } from '../validation.service';
import { ProductService } from '../product.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrls: ['./addproducts.component.css']
})
export class AddProductsComponent implements OnInit {

  constructor(private validator:ValidationService ,private productService:ProductService,private toastr:ToastrService) { }
  productName:string="";
price:number=0;
imageUrl:any;
category:string="";



  ngOnInit(): void {
  }
  onFileUpload(event:any)
  {
    this.imageUrl=event.target.files[0].name;
  }

  product = {
    productName :"",
    price: 0,
    imageUrl :"",
    category:"",
    
  }
  


  addProduct()
  {
   let name=this.productName;
   let price=this.price;
   let imageUrl=this.imageUrl;
   let category=this.category;
  
   
   try
   {
     this.validator.ValidateName(name,"Enter your name")
     let productObj:any={
       productName:name,
       price:price,
       imageUrl:imageUrl,
       category:category
     };
     
     this.productService.addDatas(productObj)
     .subscribe((res:any)=>
      {
        let data=res.data;
        console.log(data);
        this.toastr.success("Item is Added ");
     },(err:any)=>
      {
        console.log(err.response.message);
        this.toastr.error("Item is not Added ");

      });
    
      
    }
    catch{(err:any)=>
      {
        console.log(err.message);
        alert(err.message.response);
        this.toastr.error("cant add products");
      }}
   
  }
}


