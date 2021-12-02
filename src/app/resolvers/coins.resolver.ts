import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, finalize, first, tap } from 'rxjs/operators';
import { getCoins } from '../store/actions/coins.actions';
import { areCoinsLoades } from '../store/selectors/coins.selectors';

@Injectable()
export class CoinsResolver implements Resolve<boolean> {
  loading = false;

  constructor(private store: Store) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.store.pipe(
      select(areCoinsLoades),
      tap((coinsLoaded) => {
        if (!this.loading && !coinsLoaded) {
          this.loading = true;
          this.store.dispatch(getCoins());
        }
      }),
      filter((coinsLoaded) => coinsLoaded),
      first(),
      finalize(() => (this.loading = false))
    );
  }
}
