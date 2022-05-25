import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentsRoutingModule } from './comments-routing.module';
import { CommentsComponent } from './components/comments/comments.component';
import { CommentComponent } from './components/comment/comment.component';
import { CommentDetailsComponent } from './components/comment-details/comment-details.component';
import {CommentsService} from "./services/comments.service";
import {HttpClientModule} from "@angular/common/http";
import {CommentsResolver} from "./services/comments.resolver";
import {CommentResolver} from "./services/comment.resolver";
import {CommentGuard} from "./services/guards/comment.guard";


@NgModule({
  declarations: [
    CommentsComponent,
    CommentComponent,
    CommentDetailsComponent
  ],
  imports: [
    CommonModule,
    CommentsRoutingModule,
    HttpClientModule
  ],
  providers: [
    CommentsService,
    CommentsResolver,
    CommentResolver,
    CommentGuard
  ]
})
export class CommentsModule { }
