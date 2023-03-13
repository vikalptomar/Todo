import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoItemsComponent } from './todo-items/todo-items.component';
import { AddItemComponent } from './add-item/add-item.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {ReactiveFormsModule} from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UpdateItemComponent } from './update-item/update-item.component';
import { DeleteItemComponent } from './delete-item/delete-item.component';
import { TaskByIdComponent } from './task-by-id/task-by-id.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    TodoItemsComponent,
    AddItemComponent,
    UpdateItemComponent,
    DeleteItemComponent,
    TaskByIdComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
