import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import {HttpClientModule} from "@angular/common/http";
import {PostsService} from "./services/posts.service";
import {PostsResolver} from "./services/posts.resolver";
import {PostResolver} from "./services/post.resolver";
import {PostGuard} from "./services/guards/post.guard";


@NgModule({
  declarations: [
    PostsComponent,
    PostComponent,
    PostDetailsComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    HttpClientModule
  ],
  providers:[
    PostsService,
    PostsResolver,
    PostResolver,
    PostGuard,
  ]
})
export class PostsModule { }
