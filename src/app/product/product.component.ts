import { Component, OnInit } from '@angular/core';
import axios from 'axios';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.product();
  }


 product()
{
    
    
    // const param=new URLSearchParams(window.location.search.substr(1));
    // var id = parseInt(param.get("category"));
    
     const url=`https://product-mock-api.herokuapp.com/cakeshopapp/api/v1/products`;
    axios.get(url).then(res =>{
      //  let cakes=res.data;
    console.log(res.data);
    var cakes = res.data;
    var content="";
    for(let cake of cakes )
    {
    content = content+`
     <div class="productrow">
       <a href="product.html?id=${cake.id}">
        <img class=""src="assets/images/${cake.imageUrl}" alt="img">
        </a>
        <p>${cake.productName}</p>
        <br>
        <p>${cake.price}</p>
        <br>
        <p>product description......</p>
        <button type="button" onClick="tocart(${cake.id},'${cake.imageUrl}','${cake.productName}',${cake.price})">Add to cart</button>    
        </div>`;
    }
        let container=(document.querySelector("#productcontainer")as HTMLElement).innerHTML=content;
    }).catch(err=>{
        
        alert("failed in getting data");
    })


}

}
