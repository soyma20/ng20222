import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CarsRoutingModule} from './cars-routing.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {CarsService} from "./services";
import {CarsResolver} from "./resolvers/cars.resolver";
import {MainInterceptor} from "./main.interceptor";
import {AuthService} from "../../services";
import {CarFormComponent} from './components/car-form/car-form.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    CarFormComponent,
  ],
  providers:[
    CarsService,
    CarsResolver,
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: MainInterceptor
    },
    AuthService
  ],
  imports: [
    CommonModule,
    CarsRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class CarsModule { }
