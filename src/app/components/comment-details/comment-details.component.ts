import { Component, OnInit } from '@angular/core';
import {CommentService} from "../../services";
import {ActivatedRoute} from "@angular/router";
import {IComment} from "../../models";

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent implements OnInit {
  comment:IComment;

  constructor(private commentService:CommentService,
              private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id})=>{
      let {data} = history.state;
      if (!data){
        this.commentService.getById(id).subscribe(value => this.comment=value)
      }else {
        this.comment=data
      }

    })
  }

}
