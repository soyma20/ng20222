import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {UsersComponent} from './components/users/users.component';
import {UserComponent} from './components/user/user.component';
import {UserDetailsComponent} from './components/user-details/user-details.component';
import {RouterModule} from "@angular/router";
import {HomeComponent} from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    UserDetailsComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', redirectTo: 'homePage', pathMatch:'full'},
      {path: 'homePage', component: HomeComponent},
      {
        path: 'usersPage',
        component: UsersComponent,
        children: [
          {path: 'userDetails/:id', component: UserDetailsComponent},

        ]
      },

      // {path: 'userDetails/:id', component:UserDetailsComponent},

    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
