import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoItem } from '../../../todos/data-access/todo.';

@Component({
  selector: 'app-list-todo-item',
  templateUrl: './list-todo-item.component.html',
  styleUrls: ['./list-todo-item.component.scss']
})
export class ListTodoItemComponent {
  @Input() todoItem!: TodoItem;
  @Output() edit = new EventEmitter<TodoItem>();
  @Output() delete = new EventEmitter();


}
