import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditTodoComponent } from './edit-todo.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    EditTodoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    EditTodoComponent
  ]
})
export class EditTodoModule { }
