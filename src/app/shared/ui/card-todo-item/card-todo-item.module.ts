import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardTodoItemComponent } from './card-todo-item.component';



@NgModule({
  declarations: [
    CardTodoItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [CardTodoItemComponent]
})
export class CardTodoItemModule { }
