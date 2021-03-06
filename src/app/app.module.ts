import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrdersComponent } from './orders/orders.component';
import { UserComponent } from './user/user.component';
import { AddProductsComponent } from './addproducts/addproducts.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InterceptorService } from './interceptor.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgxSpinnerModule } from "ngx-spinner";
import { CommonComponent } from './common/common.component';
import { ErrorInterceptor } from './error.interceptor';
import { ThemeModule } from './theme/theme.module';
import { SharedModule } from './shared/shared.module';
import { ElementrefDirective } from './elementref.directive';
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';




@NgModule({
  declarations: [
    AppComponent,    
    RegisterComponent,
    LoginComponent,  
    HomeComponent,
    FooterComponent,     
    DashboardComponent,
    OrdersComponent,
    UserComponent,
    AddProductsComponent,    
    CommonComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,  
    BrowserAnimationsModule,
    ThemeModule,
    NgxSpinnerModule,
    FormsModule,           
    ReactiveFormsModule,
    GoogleChartsModule.forRoot(),   
    AppRoutingModule,  
    MatSliderModule, 
    MatButtonModule

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:InterceptorService,multi:true},
    {provide:HTTP_INTERCEPTORS,useClass:ErrorInterceptor,multi:true}
  ],
  exports:[
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
