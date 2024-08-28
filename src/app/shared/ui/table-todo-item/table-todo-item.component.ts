import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoItem } from '../../../todos/data-access/todo.';

@Component({
  selector: 'tr[app-table-todo-item]',
  templateUrl: './table-todo-item.component.html',
  styleUrls: ['./table-todo-item.component.scss'],
})
export class TableTodoItemComponent {
  @Input() todoItem!: TodoItem;
  @Output() edit = new EventEmitter<TodoItem>();
  @Output() delete = new EventEmitter();
}
