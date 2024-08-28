import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent<T extends { title: string; description: string }> {
  @Input() items!: T[];
  @Input() listRef!: TemplateRef<T>;
}
