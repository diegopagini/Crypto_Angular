import { createAction, props } from '@ngrx/store';
import { Coin } from 'src/app/models/coin.interface';

export const getCoins = createAction('[Home Page] Get All Coins');

export const getCoinsSuccess = createAction(
  '[Effect] Get All Coins Success',
  props<{ payload: any }>()
);

export const getCoinsFail = createAction('[Effect] Get All Coins Fail');

export const getCoin = createAction(
  '[Table] Get A Single Coin',
  props<{ payload: Coin }>()
);

export const getCoinSuccess = createAction(
  '[Table] Get A Single Coin Success',
  props<{ payload: Coin }>()
);

export const getCoinFail = createAction('[Effect] Get A Coin Fail');
