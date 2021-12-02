import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Observable, of, throwError } from 'rxjs';
import { catchError, concatMap, delay, map, tap } from 'rxjs/operators';
import { Coin } from 'src/app/models/coin.interface';
import { CoinsService } from 'src/app/services/coins.service';
import {
  getCoin,
  getCoinFail,
  getCoins,
  getCoinsFail,
  getCoinsSuccess,
  getCoinSuccess,
} from '../actions/coins.actions';

@Injectable()
export class CoinsEffects {
  loadCoins$: Observable<any> = createEffect(() =>
    this.actions$.pipe(
      ofType(getCoins),
      map((action: Action) => {
        // console.log(action);
        const serviceResponse$ = this.coinsService.getAllCoins();
        return serviceResponse$;
      }),
      delay(2500),
      concatMap((serviceResponse: Observable<Coin[]>) => {
        // serviceResponse.subscribe(console.log);
        return serviceResponse;
      }),
      catchError((error: HttpErrorResponse) => {
        this.store.dispatch(getCoinsFail());
        return throwError(error);
      }),
      map((serviceResponse: Coin[]) => {
        if (serviceResponse) {
          return getCoinsSuccess({ payload: serviceResponse });
        } else {
          return getCoinsFail();
        }
      })
    )
  );

  loadCoin$: Observable<any> = createEffect(() =>
    this.actions$.pipe(
      ofType(getCoin),
      map((action) => {
        if (action.payload) {
          return getCoinSuccess({ payload: action.payload });
        } else {
          return getCoinFail();
        }
      })
    )
  );

  constructor(
    private actions$: Actions,
    private coinsService: CoinsService,
    private store: Store
  ) {}
}
