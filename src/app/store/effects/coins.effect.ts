import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { concatMap, map } from 'rxjs/operators';
import { CoinsService } from 'src/app/services/coins.service';
import {
  getCoins,
  getCoinsFail,
  getCoinsSuccess,
} from '../actions/coins.actions';

@Injectable()
export class CoinsEffects {
  loadCoins$: Observable<any> = createEffect(() =>
    this.actions$.pipe(
      ofType(getCoins),
      map((action: Action) => {
        const serviceResponse$ = this.coinsService.getAllCoins();
        return serviceResponse$;
      }),
      concatMap((serviceResponse) => serviceResponse),
      map((serviceResponse: any) => {
        if (serviceResponse) {
          return getCoinsSuccess({ payload: serviceResponse });
        } else {
          return getCoinsFail();
        }
      })
    )
  );

  constructor(private actions$: Actions, private coinsService: CoinsService) {}
}
