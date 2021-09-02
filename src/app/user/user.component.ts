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
  constructor(private userService:UserService,private route:Router) { }

  ngOnInit(): void {
    this.allUsers();
  }

allUsers()
{
 try
 {
   
    
     
   
   this.userService.userData().subscribe((res:any)=>
   {
     console.log(res.data);
     let data=res.rows;
     let allUsers =data.map((obj:any)=>obj.doc);
     this.users = allUsers.filter( (obj:any)=> obj.role=='USER')


   },(err:any)=>
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
// delete(id:any,rev: any) {
//   let cfm = confirm("Do you want to delete ?");
//   if (cfm) {

//     this.Userservice.deleteData(id, rev).subscribe(res => {
      
//       window.location.reload();
//     },(err:any) => {
//       console.log(err.message.response);
//     });

//   }
//  }
}
