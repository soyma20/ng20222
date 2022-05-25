import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import {HttpClientModule} from "@angular/common/http";
import { RegisterComponent } from './components/register/register.component';
import {ReactiveFormsModule} from "@angular/forms";
import {AuthService} from "../../services";


@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers:[
    AuthService

  ]
})
export class RegisterModule { }
