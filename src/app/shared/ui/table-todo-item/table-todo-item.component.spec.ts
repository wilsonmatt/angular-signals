import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableTodoItemComponent } from './table-todo-item.component';

describe('TableTodoItemComponent', () => {
  let component: TableTodoItemComponent;
  let fixture: ComponentFixture<TableTodoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableTodoItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableTodoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
