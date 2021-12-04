import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Coin } from 'src/app/models/coin.interface';
import { selectCoin } from 'src/app/store/selectors/coins.selectors';

@Component({
  selector: 'app-coin',
  templateUrl: './coin.component.html',
  styleUrls: ['./coin.component.scss'],
})
export class CoinComponent implements OnInit {
  coin$!: Observable<Coin>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.coin$ = this.store.select(selectCoin);
  }
}
