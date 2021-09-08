import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private route:Router,private toastr:ToastrService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let roleStr=localStorage.getItem("LOGGED_IN_USER");
      
      let user=roleStr!=null?JSON.parse(roleStr):"";
    if(user.role=="ADMIN")    
    {
      return true;
    }
    else
    {
      this.toastr.success("You are not authorized to access Admin Port");            
      this.route.navigate(['/login']);
      return false;
    }
    
    
  
  }
  
}
