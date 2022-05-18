import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../services/user.service";
import {IUser} from "../../models/IUser";


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  userDetails: IUser;

  constructor(private activatedRoute: ActivatedRoute,
              private userService: UserService) {

  }

  ngOnInit(): void {
    if (!history.state.data) {
      this.activatedRoute.params.subscribe(({id}) => {
        this.userService.getUser(id).subscribe(value => this.userDetails = value)
        console.log(1)
      })
    } else {
      this.activatedRoute.params.subscribe(value => {
        const {data} = history.state
        this.userDetails=data
        console.log(2)

      })
    }
  }

}
