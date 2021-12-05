import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoldPipe } from './bold.pipe';

@NgModule({
  declarations: [BoldPipe],
  imports: [CommonModule],
  exports: [BoldPipe],
})
export class PipesModule {}
