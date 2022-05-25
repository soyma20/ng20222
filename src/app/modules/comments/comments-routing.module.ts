import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CommentsComponent} from "./components/comments/comments.component";
import {CommentsResolver} from "./services/comments.resolver";
import {CommentDetailsComponent} from "./components/comment-details/comment-details.component";
import {CommentResolver} from "./services/comment.resolver";
import {CommentGuard} from "./services/guards/comment.guard";

const routes: Routes = [
  {path:'', component: CommentsComponent, resolve:{commentsData:CommentsResolver}, canDeactivate:[CommentGuard], canActivate:[CommentGuard],
    children:[
      {path:':id', component:CommentDetailsComponent, resolve:{commentData:CommentResolver}}

    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentsRoutingModule { }
