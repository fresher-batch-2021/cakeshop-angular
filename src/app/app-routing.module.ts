import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddProductStockComponent } from "./add-product-stock/add-product-stock.component";
import { AddProductsComponent } from "./addproducts/addproducts.component";
import { AuthGuard } from "./auth.guard";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { EditComponent } from "./edit/edit.component";
import { FooterComponent } from "./footer/footer.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { OrdersComponent } from "./orders/orders.component";
import { ProductsComponent } from "./products/products.component";
import { RegisterComponent } from "./register/register.component";
import { RoleGuard } from "./role.guard";
import { UserComponent } from "./user/user.component";


const routes: Routes = [
    {
        path: 'home', component: HomeComponent
    },
    {
        path: 'login', component: LoginComponent
    },
    {
        path: 'register', component: RegisterComponent
    },

    {
        path: 'footer', component: FooterComponent
    },

    {
        path: 'user', component: UserComponent, canActivate: [AuthGuard, RoleGuard]
    },
    {
        path: 'orders', component: OrdersComponent, canActivate: [AuthGuard, RoleGuard]
    },
    {
        path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard, RoleGuard]
    },
    {
        path: 'products', component: ProductsComponent, canActivate: [AuthGuard, RoleGuard]
    },
    {
        path: 'addProducts', component: AddProductsComponent, canActivate: [AuthGuard, RoleGuard]
    },
    {
        path: 'edit/:id', component: EditComponent, canActivate: [AuthGuard, RoleGuard]
    },
    {
        path: 'addstock/:id', component: AddProductStockComponent, canActivate: [AuthGuard, RoleGuard]
    },
    {
        path: '', redirectTo: 'login', pathMatch: 'full'
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }