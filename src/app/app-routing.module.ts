import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {MainLayoutComponent} from "./layouts/main-layout/main-layout.component";


const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path:'', redirectTo:'cars',pathMatch:'full'},
      {path: 'login', loadChildren: () => import('./modules').then(value => value.LoginModule)},
      {path: 'register', loadChildren: () => import('./modules').then(value => value.RegisterModule)},
      {path: 'cars', loadChildren: () => import('./modules').then(value => value.CarsModule)}
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)


  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
