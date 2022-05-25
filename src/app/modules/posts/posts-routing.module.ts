import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostsComponent} from "./components/posts/posts.component";
import {PostsResolver} from "./services/posts.resolver";
import {PostDetailsComponent} from "./components/post-details/post-details.component";
import {PostResolver} from "./services/post.resolver";
import {PostGuard} from "./services/guards/post.guard";

const routes: Routes = [
  {path:'', component: PostsComponent, resolve:{postsData:PostsResolver}, canActivate:[PostGuard], canDeactivate:[PostGuard],
    children:[
      {path:':id', component:PostDetailsComponent, resolve:{postData:PostResolver}}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
