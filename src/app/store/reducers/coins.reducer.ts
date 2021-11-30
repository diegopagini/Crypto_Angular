import { createReducer, on } from '@ngrx/store';
import {
  getCoin,
  getCoins,
  getCoinsFail,
  getCoinsSuccess,
  getCoinSuccess,
} from '../actions/coins.actions';

export const initialState = {
  coins: [],
  currentCoint: {},
  loading: false,
};

export const CoinsReducer = createReducer(
  initialState,
  on(getCoins, (state, action) => ({
    ...state,
    loading: true,
  })),
  on(getCoinsSuccess, (state, { payload }) => ({
    ...state,
    coins: payload,
    loading: false,
  })),
  on(getCoinsFail, (state, action) => ({
    ...state,
    loading: false,
  })),
  on(getCoin, (state, { payload }) => ({
    ...state,
    loading: true,
  })),
  on(getCoinSuccess, (state, { payload }) => ({
    ...state,
    currentCoint: payload,
    loading: false,
  }))
);
