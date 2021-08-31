import { Component, OnInit } from '@angular/core';
import { Validator } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { ValidationService } from '../validation.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: string;
  constructor(private route: ActivatedRoute, private validator: ValidationService, private productService: ProductService) {
    this.id = this.route.snapshot.params["id"];
  }
  productName: string = "";
  price: number = 0;
  imageUrl: string = "";
  category: string = "";
  quantity: number = 0;

  ngOnInit(): void {
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
      console.log(res)
    });
  }

  edit() {


    try {
      this.validator.ValidateName(this.product.productName, "Enter your name")
      console.log(this.product)
      this.productService.updateProduct(this.product)
        .subscribe((res: any) => {
          let data = res;
          console.log(res)
          alert("Updated ")

        });
    }
    catch (err) {
      console.error(err);
      alert("Updated Failed ")
    }

  }



}