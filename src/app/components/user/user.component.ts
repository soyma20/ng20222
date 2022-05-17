import {Component, Input, OnInit} from '@angular/core';
import {IUser} from "../../models/IUser";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input()
  user: IUser={id:0,username:'',name:'',email:''}

  constructor() { }

  ngOnInit(): void {
  }

}
