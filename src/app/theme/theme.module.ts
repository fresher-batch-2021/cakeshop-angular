import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminheaderComponent } from '../adminheader/adminheader.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AdminheaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,

  ],
  exports:[
    AdminheaderComponent
  ]
})
export class ThemeModule { }
