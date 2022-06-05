import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {MainLayoutComponent} from "./layouts/main-layout/main-layout.component";

const routes:Routes=[
  {path:'', component:MainLayoutComponent, children:[
      {path:'', redirectTo:'movies',pathMatch:'full'},
      {path:'movies',loadChildren:()=> import('./modules').then(value => value.MoviesModule)},
      {path:'movies/:id', loadChildren:()=>import('./modules').then(value => value.MovieModule)},
    ]}
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
