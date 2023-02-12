import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddItemComponent } from './add-item/add-item.component';
import { DeleteItemComponent } from './delete-item/delete-item.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TaskByIdComponent } from './task-by-id/task-by-id.component';
import { TodoItemsComponent } from './todo-items/todo-items.component';
import { UpdateItemComponent } from './update-item/update-item.component';

const routes: Routes = [
  {path:"",component:TodoItemsComponent},
  {path:"add",component:AddItemComponent},
  {path:"PATCH/:id",component:UpdateItemComponent},
  {path:"DELETE/:id",component:DeleteItemComponent},
  {path:"GET/:id",component:TaskByIdComponent},
  {path:"**",component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
