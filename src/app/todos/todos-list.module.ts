import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosListComponent } from './feature/todos-list/todos-list.component';
import { TodosListRoutingModule } from './todos-list.routing.module';
import { AddTodoModule } from './feature/todos-list/add-todo/add-todo.module';
import { EditTodoModule } from './feature/todos-list/edit-todo/edit-todo.module';
import { UiContainerModule } from '../shared/ui/ui-container/ui-container.module';
import { CardTodoItemModule } from '../shared/ui/card-todo-item/card-todo-item.module';
import { ListTodoItemModule } from '../shared/ui/list-todo-item/list-todo-item.module';
import { TableTodoItemModule } from '../shared/ui/table-todo-item/table-todo-item.module';

@NgModule({
  declarations: [TodosListComponent],
  imports: [
    CommonModule,
    TodosListRoutingModule,
    AddTodoModule,
    EditTodoModule,
    UiContainerModule,
    CardTodoItemModule,
    ListTodoItemModule,
    TableTodoItemModule,
  ],
})
export class TodosListModule {}
