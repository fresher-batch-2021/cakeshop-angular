import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  dtOptions:DataTables.Settings = {};
  // dtTrigger: Subject<any> = new Subject<any>();
  constructor(private productService: ProductService,private toastr:ToastrService,private spinner:NgxSpinnerService) { }

  cakes: any;
 

  ngOnInit(): void {
    this.dtOptions={
      pagingType:'full_numbers',
      pageLength: 5,
      processing : true
    }
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide()
    }, 1500)
    this.listAllProducts();
  }


  listAllProducts() {
    this.productService.getProducts().subscribe((res:any) => {
      let datas = res.rows;
      console.table(datas);
      let productData = datas.map((obj: any) => obj.doc);
      this.cakes = productData;
    //  this.dtTrigger.next();
      console.log(productData);     

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
        },2000);
        
      },(err:any) => {
        console.log(err.message.response);
        this.toastr.error("Unable to delete the item");
      });

    }
  }
}








