import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private productService: ProductService,private toastr:ToastrService) { }

  cakes: any;

  ngOnInit(): void {
    this.listAllProducts();
  }


  listAllProducts() {
    this.productService.getProducts().subscribe((res:any) => {
      let datas = res.rows;
      console.table(datas);
      let productData = datas.map((obj: any) => obj.doc);
      this.cakes = productData;

    });
  }
  delete(id: string, rev: string) {
    let cfm = confirm("Do you want to delete ?");
    if (cfm) {

      this.productService.deleteData(id, rev).subscribe(res => {
        this.toastr.success("Item is Deleted")
        setTimeout(function()
        {
          window.location.reload();
        },3000);
        
      },(err:any) => {
        console.log(err.message.response);
        this.toastr.error("Unable to delete the item");
      });

    }
  }
}








