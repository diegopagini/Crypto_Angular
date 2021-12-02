import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoinComponent } from './coin.component';

const routes: Routes = [
  {
    path: '',
    component: CoinComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoinRoutingModule {}
