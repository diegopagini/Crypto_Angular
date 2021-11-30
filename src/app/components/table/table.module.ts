import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';

@NgModule({
  declarations: [TableComponent],
  imports: [CommonModule, MaterialModule, SharedComponentsModule],
  exports: [TableComponent],
})
export class TableModule {}
