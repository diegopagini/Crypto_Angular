import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoinComponent } from './coin.component';
import { CoinRoutingModule } from './coin-routing.module';
import { MaterialModule } from 'src/app/shared/material/material.module';

@NgModule({
  declarations: [CoinComponent],
  imports: [CommonModule, CoinRoutingModule, MaterialModule],
  exports: [CoinComponent],
})
export class CoinModule {}
