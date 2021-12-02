import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectCoinsState = createFeatureSelector<any>('app');

export const selectCoins = createSelector(selectCoinsState, (app) => {
  return app.coins;
});

export const selectCoin = createSelector(selectCoinsState, (app) => {
  return app.currentCoint;
});

export const selectLoading = createSelector(
  selectCoinsState,
  (app) => app.loading
);

export const areCoinsLoades = createSelector(
  selectCoinsState,
  (app) => !!app.coins.length
);
