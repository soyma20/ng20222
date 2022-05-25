import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CarsResolver} from "./resolvers/cars.resolver";
import {CarFormComponent} from "./components/car-form/car-form.component";

const routes: Routes = [
  {path:'',
    resolve: {carsData:CarsResolver},
    component:CarFormComponent,}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarsRoutingModule { }
