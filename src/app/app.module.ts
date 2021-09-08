import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { OccasionsComponent } from './occasions/occasions.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrivacyComponent } from './privacy/privacy.component';
import { OrdernowComponent } from './ordernow/ordernow.component';
import { PaymentComponent } from './payment/payment.component';
import { FooterComponent } from './footer/footer.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CartComponent } from './cart/cart.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdminComponent } from './admin/admin.component';
import { AdminheaderComponent } from './adminheader/adminheader.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { OrdersComponent } from './orders/orders.component';
import { UserComponent } from './user/user.component';
import { AddProductsComponent } from './addproducts/addproducts.component';
import { EditComponent } from './edit/edit.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InterceptorService } from './interceptor.service';
import { AddProductStockComponent } from './add-product-stock/add-product-stock.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgxSpinnerModule } from "ngx-spinner";
import { CommonComponent } from './common/common.component';
import { ErrorInterceptor } from './error.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegisterComponent,
    LoginComponent,
    ForgetpasswordComponent,
    OccasionsComponent,
    HomeComponent,
    PrivacyComponent,
    OrdernowComponent,
    PaymentComponent,
    FooterComponent,
    ContactusComponent,
    CartComponent,
    AboutusComponent,
    AdminComponent,
    AdminheaderComponent,
    DashboardComponent,
    ProductsComponent,
    OrdersComponent,
    UserComponent,
    AddProductsComponent,
    EditComponent,
    AddProductStockComponent,
    CommonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    GoogleChartsModule.forRoot(),
    HttpClientModule,
    NgxSpinnerModule,
    ToastrModule.forRoot(),
    

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:InterceptorService,multi:true},
    {provide:HTTP_INTERCEPTORS,useClass:ErrorInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
