import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TodoListService } from '../../../data-access/todo-list.service';
import { TodoItem } from '../../../data-access/todo.';
@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss'],
})
export class AddTodoComponent {
  constructor(private todoListService: TodoListService) {}

  addTodoForm = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
  });

  ngOnInit() {}

  save() {
    if (!this.addTodoForm.valid) return;
    this.todoListService.addItem(this.addTodoForm.value as TodoItem);
    this.addTodoForm.reset();
  }
}
