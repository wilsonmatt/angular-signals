import { Component } from '@angular/core';
import { TodoListService } from '../../data-access/todo-list.service';
import { TodoItem } from '../../data-access/todo.';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.scss'],
})
export class TodosListComponent {
  editMode: boolean = false;
  currentTodo?: TodoItem;

  constructor(public todosListService: TodoListService) {}

  onTodoEdit(todo: TodoItem) {
    this.currentTodo = todo;
    this.editMode = true;
  }

  onTodoDelete(id: number) {
    this.todosListService.deleteItem(id);
    this.editMode = false;
  }

  toggleEditMode() {
    this.editMode = false;
  }
}
