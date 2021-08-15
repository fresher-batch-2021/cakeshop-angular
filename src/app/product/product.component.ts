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
    this.project();
  }


 project()
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
        <img class=""src="images/${cake.imageUrl}" alt="img">
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
// project();
// // {/* <a href="cart.html"><button type="submit">add to cart</button></a> */}
// // const projects=[{id:4,imageUrl:"choco-Butterscotch.png",name:"cake",price:"220"}];
// function tocart(id,imageUrl,name,price)
// {
//     alert("edward");
//     let cartItemsStr=localStorage.getItem("cartElements");
//     let cartItems = cartItemsStr != null ? JSON.parse(cartItemsStr):[];
//     var qty=1;
    

    
//     let index = cartItems.findIndex(cartItems=>cartItems.Id == id);// If item already exist, update the quantity
//     // alert(index);
//     console.log(index);
//     if (index != -1){
//         let cartObj = cartItems[index];
//         console.log(cartObj);
//         cartObj.Qty++;
//         cartItems[index] = cartObj;
 
//     }
//     else{
//         // if item not exist, add new item to cart
//     let cartObj = {Id:id,name:name,price:price,imageUrl:imageUrl,Qty:qty};
//     console.log(cartObj);
//     cartItems.push(cartObj);
//     }
    
//     localStorage.setItem("cartElements",JSON.stringify(cartItems));
//     window.location.href="cart.html";

}
