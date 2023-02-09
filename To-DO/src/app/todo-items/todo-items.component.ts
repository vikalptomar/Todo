import { Component, OnInit ,ViewChild} from '@angular/core';
import {TodoService} from '../todo.service';
import {faTrash,faPen} from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent implements OnInit {

  constructor(private todo_instance:TodoService) { }
  list:any=[];
  t:any;
  ngOnInit(): void {
    this.todo_instance.getList().subscribe((data)=>{
      this.list=data;
    })
  }
  p:any;
  search(){
    console.log(this.t); 
    this.p=this.t;
  }
  delicon=faTrash;
  updateicon=faPen;
  del(datas:number){
    this.list.splice(datas-1,1)
    this.todo_instance.delTask(datas).subscribe((res)=>{
      console.log(datas)
    })
  }

}
