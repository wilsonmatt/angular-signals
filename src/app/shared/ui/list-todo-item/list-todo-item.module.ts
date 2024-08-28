import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListTodoItemComponent } from './list-todo-item.component';



@NgModule({
  declarations: [
    ListTodoItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListTodoItemComponent
  ]
})
export class ListTodoItemModule { }
