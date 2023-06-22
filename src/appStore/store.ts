/* eslint-disable import/no-cycle */
import { configureStore } from "@reduxjs/toolkit";
import baseCurrencyReducer from "./baseCurrencySlice";
import availableCurrencyReducer from "./availableCurrency";

export const store = configureStore({
  reducer: {
    baseCurrency: baseCurrencyReducer,
    availableCurrency: availableCurrencyReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
