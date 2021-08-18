import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  products:any;

  ngOnInit(): void {
  }

  axios.get(url,{headers:{'Authorization':basicAuth}}).then(res => {

  
    let data =res.data.rows;
    this.products = data.map((obj:any)=>obj.doc);
    console.log(this.products);  

    alert(this.products);
  }).catch(err =>{
      console.error(err.response.data);
      alert("Unable to get product");
  });
    
  }




  delete(id:string,rev:string){
    const dbUserName='apikey-v2-2djdlrrbf736ap4aa6rlre2x1j1wf65v1ti1e8x2bihn';
    const dbPassword='3bc2893c0a2a1ec42d9b17840b18447b';
    const basicAuth='Basic '+ btoa(dbUserName+':'+dbPassword);// one space after Basic
    const url="https://99560248-15e7-4158-bfde-3c13e3ebf4e9-bluemix.cloudantnosqldb.appdomain.cloud/"+id +"?rev="+ rev;
    

    axios.delete(url,{headers:{Authorization:basicAuth}}).then(res =>{
      
      alert("deleted successfully");
      window.location.href='/productcrud';

    }).catch(err=>{
      console.log("Error"+err.data);
    });
  

}
