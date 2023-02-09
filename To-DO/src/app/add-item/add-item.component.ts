import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms'
import {TodoService} from '../todo.service'

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  addtask=new FormGroup({
    title:new FormControl('')
  })
  constructor(private todo_instance:TodoService) { }

  ngOnInit(): void {
  }
  add(){
    this.todo_instance.addTask(this.addtask.value).subscribe((data)=>{
      this.addtask.reset({})
    })
  }

}
