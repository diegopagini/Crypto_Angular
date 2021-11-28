import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getCoins } from '../store/actions/coins.actions';

@Injectable({
  providedIn: 'root',
})
export class CoinsService {
  constructor(private http: HttpClient, private store: Store) {}

  getAllCoins(): Observable<any> {
    return this.http.get('v1/exchanges');
  }

  dispatchGetAllCoins() {
    this.store.dispatch(getCoins());
  }
}
