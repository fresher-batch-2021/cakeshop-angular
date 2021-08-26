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
}
