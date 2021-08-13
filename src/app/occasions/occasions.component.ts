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
    this.product();//to call a function using typescript
  }

  
// ====================================================
// getting data from server
product() {
    
  var count = 0;
  const url = "https://product-mock-api.herokuapp.com/cakeshopapp/api/v1/products";//url to get all element from server
  axios.get(url).then(res => {
    alert("hel"); 

      console.log(res.data);//to printing in console
      var images = res.data;
      let content = "";
      for (let img of images) { 
          
          content = content + `<div class="cakecontainer" id="${img.id}">
          <form action="cart.html">
          <a href="/product?id=${img.id}">
          <img class="productImg" src="assets/images/${img.imageUrl}"  id="productImg" alt="img">    
          </a>
          <p class="productName" id="productName">${img.productName}</p>
          <p class="productPrice" id="productPrice" >${img.price}</p>
          <p>${img.id}</p>
          <button type="submit" onClick="toCart(${img.id},'${img.productName}','${img.imageUrl}','${img.price}')">add to cart</button>
          </form>
          </div>`;
          //for printing only 4 elements in a row
          count = count + 1;
          if (count == 4) {
          content = content + `<br>`;
          count = 0;
          }
      }
      (document.querySelector("#container")as HTMLElement).innerHTML=content;
      
  });
}
// sending data in html url "ProductSpec.html?id=${img.id}"


//----------------------------------------for storing data in local machine-------------------------------


// function getCakeSection(category, cakeItems){
//   let content = "";
//   var count = 0;
//   content += "<h3>" + category + "</h3>";
//   for (let cake of cakeItems) {
//       content = content + `

// <div class="cakerow">

// <a href="product.html?category=${cake.id}">
// <img class="cakeimg" id="cakeworld"src="images/${cake.imageUrl}" alt="img"></a>
// <p>${cake.productName}</p>
// <p>₹${cake.price}.00</p>
// <a href="ordernow.html">ordernow</a>
// </div>`;
//       count = count + 1;
//       if (count == 5) {
//           content = content + `<br>`;
//           count = 0;
//       }

      

//   }
//   return content;

// }


// function displayCakes(category) {
//   const url = "https://product-mock-api.herokuapp.com/cakeshopapp/api/v1/products";
//   axios.get(url).then(res => {
//       const products = res.data;
//       console.log(products);
//       const categories = _.groupBy(products, 'category');
//       console.log(categories);

//       var content = "";
//       if (products.length==0) {
//           alert("No cake items");
//       }
//       else  if ( category !=null){
         
//                const cakeItems = categories[category];
//                console.log("Category:", category, cakeItems);
//                content+= getCakeSection(category, cakeItems);// return html code
                            
//           // }
         
//       }
//       else{            
          
//            for (let category in categories) {
//                const cakeItems = categories[category];
//                console.log("Category:", category, cakeItems);
//                content+= getCakeSection(category, cakeItems);// return html code
                            
//            }
//       }
//       console.log(content);
//       document.querySelector("#container").innerHTML = content;

//       // alert("succesful on getting data");
//   }).catch(err => {
//       console.log(err.data);
//       alert("failed in getting data");
//   });




// }

// const params = new URLSearchParams(window.location.search.substr(1));
// const category = params.get('category');
// console.log("Selected Category in previous page:" + category);
// displayCakes(category);
}
