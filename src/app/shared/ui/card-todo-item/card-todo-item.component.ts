import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoItem } from '../../../todos/data-access/todo.';


@Component({
  selector: 'app-card-todo-item',
  templateUrl: './card-todo-item.component.html',
  styleUrls: ['./card-todo-item.component.scss']
})
export class CardTodoItemComponent {
  @Input() todoItem!: TodoItem;
  @Output() edit = new EventEmitter<TodoItem>();
  @Output() delete = new EventEmitter();

}

