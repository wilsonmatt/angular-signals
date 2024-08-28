import { Component, Input, TemplateRef } from '@angular/core';

export type ViewMode = 'list' | 'table' | 'card';

@Component({
  selector: 'app-ui-container',
  templateUrl: './ui-container.component.html',
  styleUrls: ['./ui-container.component.scss'],
})
export class UiContainerComponent {
  @Input() data: any;
  @Input() listRef!: TemplateRef<any>;
  @Input() cardRef!: TemplateRef<any>;
  @Input() tableRowRef!: TemplateRef<any>;

  viewMode: ViewMode = 'list';

  switchViewMode(viewMode: ViewMode) {
    this.viewMode = viewMode;
  }
}
