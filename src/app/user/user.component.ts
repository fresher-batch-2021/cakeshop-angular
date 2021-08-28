import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users:any;
  id:any;
  rev:any;
  constructor(private Userservice:UserService,private route:Router) { }

  ngOnInit(): void {
    this.allUsers();
  }

allUsers()
{
 try
 {
   this.Userservice.userData().then((res:any)=>
   {
     console.log(res.data);
     let data=res.data.rows;
     this.users=data.map((obj:any)=>obj.doc);

   }).catch((err:any)=>
   {
   console.log(err.response.message);
  });
}
catch{
  (err: any) => {
    console.log(err.message);
    alert(err.message.response);
    alert("cant add products");
}
 }
 
}
delete(id:any,rev: any) {
  let cfm = confirm("Do you want to delete ?");
  if (cfm) {

    this.Userservice.deleteData(id, rev).then(res => {
      
      window.location.reload();
    }).catch(err => {
      console.log(err.message.response);
    });

  }
 }
}
