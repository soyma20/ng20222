import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import {HttpClientModule} from "@angular/common/http";
import {UsersService} from "./services/users.service";
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import {UsersResolver} from "./services/users.resolver";
import {UserResolver} from "./services/user.resolver";
import {UserGuard} from "./services/guards/user.guard";


@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    HttpClientModule,
  ],
  providers:[
    UsersService,
    UsersResolver,
    UserResolver,
    UserGuard
  ]
})
export class UsersModule { }
