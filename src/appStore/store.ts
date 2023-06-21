/* eslint-disable import/no-cycle */
import { configureStore } from "@reduxjs/toolkit";
import baseCurrencyReducer from "../features/baseCurrencySlice";
import postsReducer from "../features/availableCurrency";

export const store = configureStore({
  reducer: {
    baseCurrency: baseCurrencyReducer,
    availableCurrency: postsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
