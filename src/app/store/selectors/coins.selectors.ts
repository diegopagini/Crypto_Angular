import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectCoinsState = createFeatureSelector<any>('app');

export const selectCoins = createSelector(selectCoinsState, (app) => app.coins);

export const selectCoin = createSelector(
  selectCoinsState,
  (app) => app.currentCoint
);

export const isCoinLoaded = createSelector(selectCoinsState, (app) => {
  return !!app.currentCoint.exchange_id;
});

export const selectLoading = createSelector(
  selectCoinsState,
  (app) => app.loading
);

export const areCoinsLoades = createSelector(
  selectCoinsState,
  (app) => !!app.coins.length
);
