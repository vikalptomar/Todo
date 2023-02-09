import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {TodoService} from '../todo.service';
import {FormGroup,FormControl} from '@angular/forms'

@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.component.html',
  styleUrls: ['./update-item.component.css']
})
export class UpdateItemComponent implements OnInit {

  updatetask=new FormGroup({
    title:new FormControl('')
  })
  constructor(private route:ActivatedRoute,private todo_instance:TodoService) { }

  ngOnInit(): void {
  }
  update(){
    //console.log(this.updatetask.value)
    //console.log(this.route.snapshot.params['id'])
    this.todo_instance.patchById(this.route.snapshot.params['id'],this.updatetask.value).subscribe((data)=>{
      console.log(data);
    })
    this.updatetask.reset({})
  }

}
