import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {ICar} from "../../../interfaces";
import {CarsService} from "../services";

@Injectable({
  providedIn: 'root'
})
export class CarsResolver implements Resolve<ICar[]> {
  constructor(private  carsService: CarsService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ICar[]> | Promise<ICar[]> | ICar[] {
    return this.carsService.getAll();
  }

}
