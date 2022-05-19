import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CommentService} from "../../services";
import {IComment} from "../../interfaces";

@Component({
  selector: 'app-commet-details',
  templateUrl: './commet-details.component.html',
  styleUrls: ['./commet-details.component.css']
})
export class CommetDetailsComponent implements OnInit {
  comment:IComment;

  constructor(private activatedRoute: ActivatedRoute, private commentService:CommentService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id})=>{
      this.commentService.getById(id).subscribe(value => this.comment = value)
    })
  }

}
