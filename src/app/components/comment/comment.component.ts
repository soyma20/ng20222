import {Component, Input, OnInit} from '@angular/core';
import {IComment} from "../../models/IComment";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input()
  comment: IComment = {id:0, postId:0,name:'',body:'',email:''}

  constructor() { }

  ngOnInit(): void {
  }

}
