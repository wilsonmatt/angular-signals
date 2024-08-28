import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent<T extends { description: string; title: string }> {
  @Input() cardRef!: TemplateRef<T>;
  @Input() items!: T[];
  activeItem?: T;

  onCardClick(item: T) {
    this.activeItem = item;
  }
}
