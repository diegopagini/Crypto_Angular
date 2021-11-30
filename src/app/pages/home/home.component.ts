import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Coin } from 'src/app/models/coin.interface';
import { CoinsService } from 'src/app/services/coins.service';
import {
  selectCoins,
  selectLoading,
} from 'src/app/store/selectors/coins.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  coins$!: Observable<Coin[]>;
  loading$: Observable<boolean> = of(false);

  constructor(private coinsService: CoinsService, private store: Store) {}

  ngOnInit(): void {
    this.coinsService.dispatchGetAllCoins();
    this.coins$ = this.store.select(selectCoins);
    this.loading$ = this.store.select(selectLoading);
  }
}
