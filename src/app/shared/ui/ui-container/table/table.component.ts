import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent<T extends { title: string; description: string }> {
  @Input() items!: T[];
  @Input() tableRowRef!: TemplateRef<T>;
}
