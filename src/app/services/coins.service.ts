import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Coin } from '../models/coin.interface';
import { getCoin, getCoins } from '../store/actions/coins.actions';

@Injectable({
  providedIn: 'root',
})
export class CoinsService {
  constructor(private http: HttpClient, private store: Store) {}

  getAllCoins(): Observable<Coin[]> {
    return this.http.get<Coin[]>('v1/exchanges');
  }

  dispatchGetAllCoins() {
    this.store.dispatch(getCoins());
  }

  dispatchGetCoin(payload: Coin) {
    this.store.dispatch(getCoin({ payload }));
  }
}
