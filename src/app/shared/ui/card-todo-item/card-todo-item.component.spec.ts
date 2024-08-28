import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTodoItemComponent } from './card-todo-item.component';

describe('CardTodoItemComponent', () => {
  let component: CardTodoItemComponent;
  let fixture: ComponentFixture<CardTodoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardTodoItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardTodoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
