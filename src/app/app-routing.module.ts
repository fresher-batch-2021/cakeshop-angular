import { componentFactoryName, } from "@angular/compiler";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminComponent } from "./admin/admin.component";
import { CartComponent } from "./cart/cart.component";
import { ContactusComponent } from "./contactus/contactus.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { FooterComponent } from "./footer/footer.component";

import { ForgetpasswordComponent } from "./forgetpassword/forgetpassword.component";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { OccasionsComponent } from "./occasions/occasions.component";
import { OrdernowComponent } from "./ordernow/ordernow.component";
import { OrdersComponent } from "./orders/orders.component";
import { PaymentComponent } from "./payment/payment.component";
import { PrivacyComponent } from "./privacy/privacy.component";
import { ProductComponent } from "./product/product.component";
import { RegisterComponent } from "./register/register.component";
import { UserComponent } from "./user/user.component";


const routes: Routes = [
    {
        path:'home',component:HomeComponent
    },
    {
        path:'login',component:LoginComponent
    },
    {
        path:'register',component:RegisterComponent
    },
     {
         path:'header',component:HeaderComponent
     },
     {
         path:'forgetpassword',component:ForgetpasswordComponent
     },
     {
         path:'occasions',component:OccasionsComponent
     },
     {
         path:'cart',component:CartComponent
     },
     {
         path:'contactus',component:ContactusComponent
     },
     {
         path:'footer',component:FooterComponent
     },
     {
         path:'payment',component:PaymentComponent
     },
     {
         path:'privacy',component:PrivacyComponent
     },
     {
         path:'product',component:ProductComponent
     },
     {
         path:'ordernow',component:OrdernowComponent
     },
     {
         path:'adminheader',component:AdminComponent
     },
     {
         path:'user',component:UserComponent
     },
     {
         path:'orders',component:OrdersComponent
     },
     {
         path:'dashboard',component:DashboardComponent
     },
     {
         path:'header',component:HeaderComponent
     },
     {
         path:'',redirectTo:'home',pathMatch:'full'
     }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }