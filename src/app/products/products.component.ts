import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private productService: ProductService) { }

  cakes: any;

  ngOnInit(): void {
    this.listAllProducts();
  }


  listAllProducts() {
    this.productService.getProducts().then(res => {
      let datas = res.data.rows;
      console.table(datas);
      let productData = datas.map((obj: any) => obj.doc);
      this.cakes = productData;

    });
  }
  delete(id: string, rev: string) {
    let cfm = confirm("Do you want to delete ?");
    if (cfm) {

      this.productService.deleteData(id, rev).then(res => {
        alert("Successfully deleted");
        window.location.reload();
      }).catch(err => {
        console.log(err.message.response);
      });

    }
  }
}








