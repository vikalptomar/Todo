import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TodoService} from '../todo.service'

@Component({
  selector: 'app-delete-item',
  templateUrl: './delete-item.component.html',
  styleUrls: ['./delete-item.component.css']
})
export class DeleteItemComponent implements OnInit {

  constructor(private route:ActivatedRoute,private todo_instance:TodoService) { }

  ngOnInit(): void {
  }
  x="Confirm to Delete"
  data=this.route.snapshot.params['id'];
  del(){
    this.todo_instance.delTask(this.data).subscribe((res)=>{
      console.log("h1");
      this.x="Deleted successfully";
    })
  }
}
