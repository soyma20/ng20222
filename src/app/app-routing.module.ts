import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {MainLayoutComponent} from "./layouts/main-layout/main-layout.component";


const routes:Routes = [
  {path:'', component: MainLayoutComponent, children:[
      {path: 'login', loadChildren:()=>},
      {path: 'register', loadChildren:()=>}
    ]}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,


  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
