import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users:any;
  constructor(private Userservice:UserService) { }

  ngOnInit(): void {
    this.allUsers();
  }

allUsers()
{
 try
 {
   let data=this.Userservice.userData();
   data.then((res:any)=>
   {
     console.log(res.data);
     this.users=res.data;

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
