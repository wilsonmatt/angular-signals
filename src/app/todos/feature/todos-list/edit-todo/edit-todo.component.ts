import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TodoListService } from '../../../data-access/todo-list.service';
import { TodoItem } from '../../../data-access/todo.';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.scss'],
})
export class EditTodoComponent {
  currentId!: number;
  constructor(private todoListService: TodoListService) {}

  @Input() set todo(todo: TodoItem) {
    this.editTodoForm.reset(todo);
    this.currentId = todo.id!;
  }

  editTodoForm = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
  });

  save() {
    if (!this.editTodoForm.valid) return;
    const editedTodo = {
      id: this.currentId,
      ...this.editTodoForm.value,
    } as TodoItem;
    this.todoListService.editItem(editedTodo);
  }
}
