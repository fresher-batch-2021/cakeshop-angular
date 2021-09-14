import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductStockComponent } from '../add-product-stock/add-product-stock.component';
import { AuthGuard } from '../auth.guard';
import { EditComponent } from '../edit/edit.component';
import { ProductsComponent } from '../products/products.component';
import { RoleGuard } from '../role.guard';

const routes: Routes = [
  {path:'',component:ProductsComponent,canActivate:[AuthGuard,RoleGuard] },
  {
    path: 'edit/:id', component: EditComponent, canActivate: [AuthGuard, RoleGuard]
  },
    {
      path: 'addstock/:id', component: AddProductStockComponent, canActivate: [AuthGuard, RoleGuard]
 },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductmoduleRoutingModule { }
