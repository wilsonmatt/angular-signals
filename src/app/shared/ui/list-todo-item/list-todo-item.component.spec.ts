import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTodoItemComponent } from './list-todo-item.component';

describe('ListTodoItemComponent', () => {
  let component: ListTodoItemComponent;
  let fixture: ComponentFixture<ListTodoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTodoItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListTodoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
