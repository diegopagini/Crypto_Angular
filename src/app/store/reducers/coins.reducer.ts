import { createReducer, on } from '@ngrx/store';
import { getCoin, getCoinsSuccess } from '../actions/coins.actions';

export const initialState = {
  coins: [],
  currentCoint: {},
};

export const CoinsReducer = createReducer(
  initialState,
  on(getCoinsSuccess, (state, { payload }) => ({
    ...state,
    coins: payload,
  })),
  on(getCoin, (state, { payload }) => ({
    ...state,
    currentCoint: payload,
  }))
);
