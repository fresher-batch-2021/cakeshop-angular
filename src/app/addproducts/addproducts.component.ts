import { Component, OnInit } from '@angular/core';
import { ValidationService } from '../validation.service';
import { ProductService } from '../product.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { Product } from '../datatype';

@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrls: ['./addproducts.component.css']
})
export class AddProductsComponent implements OnInit {

  constructor( private validator:ValidationService ,private productService:ProductService,private toastr:ToastrService,private spinner:NgxSpinnerService) { }
  productName:string="";
price:number=0;
imageUrl:string='';
category:string="";



  ngOnInit(): void {
    this.spinner.show();
    
    setTimeout(() => {
      this.spinner.hide()
    }, 1500)

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
    this.spinner.show();
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
     const Obj=new Product();
     Obj.setdata(productObj)
     this.productService.addDatas(Obj)
     .subscribe((res:any)=>
      {
        let data=res.data;
        
          this.spinner.hide()
        
        console.log(data);
        this.toastr.success("Item is Added ");
       
     },(err:any)=>
      {
        this.spinner.hide()
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


