import { createAction, props } from '@ngrx/store';

export const getCoins = createAction('[Home Page] Get All Coins');

export const getCoinsSuccess = createAction(
  '[Effect] Get All Coins Success',
  props<{ payload: any }>()
);

export const getCoinsFail = createAction('[Effect] Get All Coins Fail');

export const getCoin = createAction(
  '[Home Page] Get A Single Coin',
  props<{ payload: any }>()
);
