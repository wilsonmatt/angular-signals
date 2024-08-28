import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableTodoItemComponent } from './table-todo-item.component';



@NgModule({
  declarations: [
    TableTodoItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [TableTodoItemComponent]
})
export class TableTodoItemModule { }
