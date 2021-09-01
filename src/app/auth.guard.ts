import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private route:Router,private toastr:ToastrService){}
  getGuard(key:string)
  {
     let guard=localStorage.getItem(key);
     return guard;
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // let loginStatus=localStorage.getItem("loggedIn")
      // console.log(loginStatus);
      
      let userStr =localStorage.getItem("LOGGED_IN_USER")
      if(userStr == null ){
        this.route.navigate(['/login']);
      }
      else {
        let user = JSON.parse(userStr);      
          if(user.role=="ADMIN"){
            return true;
          }
          else{
            this.toastr.success("You are not authorized to access Admin Portal");            
            this.route.navigate(['/login']);
          }        
      }
      return false;
  
  }
  
}
