import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material/material.module';
import { TableModule } from './table/table.module';
import { CardModule } from './card/card.module';

const components = [TableModule, CardModule];

@NgModule({
  imports: [CommonModule, MaterialModule, ...components],
  exports: [...components],
})
export class ComponentsModule {}
