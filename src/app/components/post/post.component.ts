import {Component, Input, OnInit} from '@angular/core';
import {IPost} from "../../models/IPost";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input()
  post: IPost={id:0,body:'',title:''}

  constructor() { }

  ngOnInit(): void {
  }

}
