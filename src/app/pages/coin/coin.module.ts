import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoinComponent } from './coin.component';
import { CoinRoutingModule } from './coin-routing.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  declarations: [CoinComponent],
  imports: [CommonModule, CoinRoutingModule, MaterialModule, ComponentsModule],
  exports: [CoinComponent],
})
export class CoinModule {}
