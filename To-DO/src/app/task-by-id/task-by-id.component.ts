import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TodoService} from '../todo.service'
@Component({
  selector: 'app-task-by-id',
  templateUrl: './task-by-id.component.html',
  styleUrls: ['./task-by-id.component.css']
})
export class TaskByIdComponent implements OnInit {

  constructor(private route:ActivatedRoute,private todo:TodoService) { }

  list:any=[];
  x:any;
  ngOnInit(): void {
    this.todo.getList().subscribe((data)=>{
      this.list=data;
  })}

  tom=this.todo.getTaskById(this.route.snapshot.params['id']).subscribe((res)=>{
    console.log(res);
    this.x=res;
  })
}
