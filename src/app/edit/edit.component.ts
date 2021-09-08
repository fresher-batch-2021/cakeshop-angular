import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validator, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from '../product.service';
import { ValidationService } from '../validation.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  editForm! : FormGroup

  id: string;
  constructor(private route: ActivatedRoute, private validator: ValidationService, private productService: ProductService, private toastr: ToastrService,private fb:FormBuilder,private spinner:NgxSpinnerService) {
    this.id = this.route.snapshot.params["id"];
   
  }
  productName: string = "";
  price: number = 0;
  imageUrl: string = "";
  category: string = "";


  ngOnInit(): void {
    this.spinner.show();
    this.editForm=this.fb.group({
      _id:new FormControl("",Validators.required),//we need get the id and rev ,then only you can change the product
      _rev:new FormControl("",Validators.required),
      productName:new FormControl("",Validators.required),
      imageUrl:new FormControl("",Validators.required),
      price:new FormControl("",Validators.required),
      category:new FormControl("",Validators.required),
    
    })
    this.getProduct();
  }

  onFileUpload(event: any) {
    this.imageUrl = event.target.files[0].name;
  }

  product: any;

  getProduct() {
    this.productService.getProduct(this.id).subscribe((res: any) => {
      console.log(res);
      
      this.product = res;
      this.editForm.patchValue(this.product)  
      setTimeout(() => {
        this.spinner.hide();
      }, 2000);    
      console.log(res)
    });
  }

  edit() {


    try {
      
      let productObj = this.editForm.value;
      console.log(productObj);
      this.productService.updateProduct(productObj)
        .subscribe((res: any) => {
          let data = res;
          console.log(res)
          this.toastr.success("Item is Updated ")

        });
    }
    catch (err) {
      console.error(err);
      this.toastr.error("Updated Failed ")
    }

  }



}