import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { ListComponent } from './list/list.component';
import { TableComponent } from './table/table.component';
import { UiContainerComponent } from './ui-container.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';


export const components = [
  UiContainerComponent,
  CardComponent,
  ListComponent,
  TableComponent,
];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, MatTooltipModule, MatIconModule, MatButtonModule],
  exports: [...components],
})
export class UiContainerModule {}
