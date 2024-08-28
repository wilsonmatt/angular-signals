import { Injectable } from '@angular/core';
import { computed } from '../../../signals/computed';
import { signal } from '../../../signals/signal';
import { TodoItem } from './todo.';

export const initialTodos = [
  { id: 1, title: 'Title 1', description: 'Some Description' },
  { id: 2, title: 'Title 2', description: 'Some Description' },
];

@Injectable({
  providedIn: 'root',
})
export class TodoListService {
  currentItemId: number = 3;
  todos = signal<TodoItem[]>(initialTodos);
  currentId = computed(() => this.currentItemId + 1);

  deleteItem(id: number) {
    this.todos.update((todos) => todos.filter((item) => item.id !== id));
  }

  addItem(item: TodoItem) {
    this.currentItemId++;
    const id = this.currentId();
    const todoItem: TodoItem = { id, ...item };
    this.todos.update((users) => [todoItem, ...users]);
  }

  editItem(item: TodoItem) {
    const updatedItems = this.todos().map((todo) => {
      if (item.id === todo.id) {
        return { ...item };
      }
      return todo;
    });
    this.todos.set(updatedItems);
  }
}
