import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material/material.module';
import { TableModule } from './table/table.module';

const components = [TableModule];

@NgModule({
  imports: [CommonModule, MaterialModule, ...components],
  exports: [...components],
})
export class ComponentsModule {}
