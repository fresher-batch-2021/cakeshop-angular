import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordernow',
  templateUrl: './ordernow.component.html',
  styleUrls: ['./ordernow.component.css']
})
export class OrdernowComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

// function ordernow()
// {
//     event.preventDefault();
//     const name=document.querySelector("#name").value;
//     const phonenumber=document.querySelector("#phoneNumber").value;
//     const date=document.querySelector("#date").value;
//     const time=document.querySelector("#time").value;
//     const fondant=document.querySelector("#fondant").value;
//     const icecake=document.querySelector("#icecake").value;
//     const buttercream=document.querySelector("#buttercake").value;
//     const cakeFlavour=document.querySelector("#cakeflavour").value;
//     const numberfkg=document.querySelector("#numberofkg").value;
//     const specialinstruction=document.querySelector("#specialinstruction").value;
//     const cakemessage=document.querySelector("#cakemessage").value;
//     const address=document.querySelector("#address").value;
//     console.log(name+"-"+phoneNumber+"-"+date+"-"+time+"-"+fondant+"-"+icecake+"-"+buttercake+"-"+numberofkg+"-"+specialinstruction+"-"+cakemessage+"-"+address);
//     alert("your order successfully placed");
//     window.location.href="index.html";
// }
