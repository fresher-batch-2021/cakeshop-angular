import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../login.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private router: Router, private loginService: LoginService,
    private fb: FormBuilder, private toastr: ToastrService, private spinner: NgxSpinnerService) {

    this.loginForm = this.fb.group({
      email: new FormControl("", [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }

  user: any;
  ngOnInit(): void {
    // this.spinner.show();

    //   let userStr = localStorage.getItem('LOGGED_IN_USER');
    //   this.user = userStr != null ? JSON.parse(userStr) : null;
    //   console.log(this.user)
    //  alert(2);
    //   if(this.user != null ){
    //     this.router.navigate(['/products']);
    //   }
    

  }

  Login() {


    let user = this.loginForm.value;
    console.log("forms value", this.loginForm.value);
    // console.log(this.Login());

    const role = "ADMIN";
    this.loginService.login(user.email, user.password, role).subscribe((res: any) => {
      console.log(res);
      if (res.docs.length == 0) {
        this.toastr.error("Invalid Login Credientials")
      }
      else {
        let userObj= res.docs[0];
        console.log(userObj);
        localStorage.setItem('LOGGED_IN_USER', JSON.stringify(userObj))        
      
        if (userObj.role == "ADMIN") {

          this.toastr.success("Welcome Admin");
          this.router.navigate(['/dashboard']);
          // setTimeout(() => {
          //   this.spinner.hide();

          // }, 100);

        }
        // else {
        //   // this.router.navigate(['login'])
        // }
      }
    });




  }
}


