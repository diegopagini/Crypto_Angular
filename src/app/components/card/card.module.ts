import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  declarations: [CardComponent],
  imports: [CommonModule, MaterialModule, PipesModule],
  exports: [CardComponent],
})
export class CardModule {}
