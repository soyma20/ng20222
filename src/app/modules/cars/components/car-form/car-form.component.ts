import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CarsService} from "../../services";
import {ICar} from "../../../../interfaces";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css']
})
export class CarFormComponent implements OnInit {
  form: FormGroup;
  cars: ICar[];
  carForUpdate: ICar | null;


  constructor(private carsService: CarsService, private activatedRoute: ActivatedRoute) {
    this._createForm()
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({carsData}) => this.cars = carsData)
  }

  _createForm(): void {
    this.form = new FormGroup({
      model: new FormControl(null),
      price: new FormControl(null),
      year: new FormControl(null),
    })
  }

  create() {
    if (!this.carForUpdate) {
      const car = this.form.getRawValue();
      this.carsService.create(car).subscribe(() => {
        this.cars.push(car)
      });
    } else {
      this.carsService.updateById(this.carForUpdate.id, this.form.value).subscribe()
      Object.assign(this.carForUpdate,this.form.value)
    }
    this.form.reset()


  }

  delete(id: string): void {
    this.carsService.deleteById(id).subscribe()
    const index = this.cars.findIndex(car => car.id === id);
    this.cars.splice(index, 1)
  }

  update(car: ICar) {
    this.carForUpdate = car;
    this.form.setValue({model: car.model, year: car.year, price: car.price})
  }
}
