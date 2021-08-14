import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-occasions',
  templateUrl: './occasions.component.html',
  styleUrls: ['./occasions.component.css']
})
export class OccasionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.occasions();//to call a function using typescript
  }
// getting data from server
occasions() {
    
  var count = 0;
  const url = "https://product-mock-api.herokuapp.com/cakeshopapp/api/v1/products";//url to get all element from postman(server)
  axios.get(url).then(res => {
    // alert("hel"); 

      console.log(res.data);//to printing in console
      var images = res.data;
      let content = "";
      for (let img of images) { 
          
          content = content + `<div class="cakecontainer" id="${img.id}">
          <form action="cart.html">
          <a href="/product?id=${img.id}">
          <img  src="assets/images/${img.imageUrl}"  alt="img">    
          </a>
          <p >${img.productName}</p>
          <p >${img.price}</p>
          <p>${img.id}</p>
          <button type="submit" onClick="toCart(${img.id},'${img.productName}','${img.imageUrl}','${img.price}')">add to cart</button>
          </form>
          </div>`;
          //for printing only 5 elements in a row
          count = count + 1;
          if (count == 5) {
          content = content + `<br>`;
          count = 0;
          }
      }
      (document.querySelector("#container")as HTMLElement).innerHTML=content;
      
  });
}
// sending data in html url product page
// storing data in local machine



}
