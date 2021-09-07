import { componentFactoryName, } from "@angular/compiler";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddProductStockComponent } from "./add-product-stock/add-product-stock.component";
import { AddProductsComponent } from "./addproducts/addproducts.component";
import { AdminComponent } from "./admin/admin.component";
import { AuthGuard } from "./auth.guard";
import { CartComponent } from "./cart/cart.component";
import { ContactusComponent } from "./contactus/contactus.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { EditComponent } from "./edit/edit.component";
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
import { ProductsComponent } from "./products/products.component";
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
         path:'ordernow',component:OrdernowComponent
     },
     {
         path:'adminheader',component:AdminComponent
     },
     {
         path:'user',component:UserComponent,canActivate:[AuthGuard]
     },
     {
         path:'orders',component:OrdersComponent,canActivate:[AuthGuard]
     },
     {
         path:'dashboard',component:DashboardComponent,canActivate:[AuthGuard]
     },
     {
         path:'header',component:HeaderComponent
     },
     {
         path:'products',component:ProductsComponent,canActivate:[AuthGuard]
     },
     {
        path:'addProducts',component:AddProductsComponent ,canActivate:[AuthGuard]
    },
    {
        path:'edit/:id',component:EditComponent,canActivate:[AuthGuard]
    },
    {
        path:'addstock/:id',component:AddProductStockComponent,canActivate:[AuthGuard]
    },
     {
         path:'',redirectTo:'login',pathMatch:'full'
     }
     
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }