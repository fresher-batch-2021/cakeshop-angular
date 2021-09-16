import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductmoduleRoutingModule } from './productmodule-routing.module';
import { ProductsComponent } from '../products/products.component';
import { EditComponent } from '../edit/edit.component';
import { AddProductStockComponent } from '../add-product-stock/add-product-stock.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GoogleChartsModule } from 'angular-google-charts';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ThemeModule } from '../theme/theme.module';
import {MatButtonModule} from '@angular/material/button';
import { DataTablesModule } from 'angular-datatables';
import { ElementrefDirective } from '../elementref.directive';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: 
  [
    ProductsComponent,
    EditComponent,
    AddProductStockComponent,
    ElementrefDirective
  ],
  imports: [
    CommonModule,
    ThemeModule,
    ProductmoduleRoutingModule,
    FormsModule,    
    ReactiveFormsModule,
    GoogleChartsModule.forRoot(),
    HttpClientModule,
    NgxSpinnerModule,
    MatButtonModule,
    DataTablesModule,
    MatDialogModule
    
    
    
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProductmoduleModule { }

