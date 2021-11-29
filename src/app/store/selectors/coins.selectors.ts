import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectCoinsState = createFeatureSelector<any>('app');

export const selectCoins = createSelector(selectCoinsState, (app) => {
  return app.coins;
});

export const selectLoading = createSelector(
  selectCoinsState,
  (app) => app.loading
);
