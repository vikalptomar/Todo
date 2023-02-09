import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  url="http://localhost:3000/tasks"
  constructor(private http:HttpClient) { }
  getList(){
    return this.http.get(this.url)
  }
  getTaskById(id:number){
    return this.http.get(`${this.url}/${id}`)
  }
  addTask(data:any){
    return this.http.post(this.url,data)
  }
  delTask(id:number){
    return this.http.delete(`${this.url}/${id}`)
  }
  patchById(id:number,data:any){
    return this.http.patch(`${this.url}/${id}`,data)
  }
}
