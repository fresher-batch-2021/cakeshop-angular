// import { Component, OnInit } from '@angular/core';
// import axios from 'axios';
// import { url } from 'inspector';

// @Component({
//   selector: 'app-occasions',
//   templateUrl: './occasions.component.html',
//   styleUrls: ['./occasions.component.css']
// })
// export class OccasionsComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//     this.displayCakes();//to call a function using typescript
//   }
// // getting data from server
// displayCakes(category,cakeItems) {
//   let count = 0;
//   let content="";
  
//   content += "<h3>" + category + "</h3>";
//   for (let cake of cakeItems) {
//       content = content + `

// <div class="cakerow">

// <a href="product.html?id=${cake._id}">
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
//    }
//   return content;

// }


// function displayCakes(category)
//  {
//   const url="https://99560248-15e7-4158-bfde-3c13e3ebf4e9-bluemix.cloudantnosqldb.appdomain.cloud/cakeshop_cakes/_all_docs?include_docs=true";
     
//       axios.post(url).then(res => {
//       const data = res.data.rows;
//       const products = res.data;
//       console.log(products);
//       const categories = _.groupBy(products, 'category');
//       console.log(categories);

//       var content = "";
//       if (products.length == 0) {
//           alert("No cake items");
//       }
//       else if (category != null) {

//           const cakeItems = categories[category];
//           console.log("Category:", category, cakeItems);
//           content += getCakeSection(category, cakeItems);// return html code



//       }
//       else {

//           for (let category in categories) {
//               const cakeItems = categories[category];
//               console.log("Category:", category, cakeItems);
//               content += getCakeSection(category, cakeItems);// return html code

//           }
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

  
// // <p>${img.i}</p>
