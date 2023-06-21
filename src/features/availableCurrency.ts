import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AllCurrency } from "../types/Currency";

type InitialState = {
  loaded: boolean;
  hasError: boolean;
  items: AllCurrency;
};

const initialAuthor: InitialState = {
  loaded: false,
  hasError: false,
  items: {},
};

const availableCurrencySlice = createSlice({
  name: "avaibleCur",
  initialState: initialAuthor,
  reducers: {
    setAvaibleCurrency: (state, action: PayloadAction<AllCurrency>) => {
      // eslint-disable-next-line no-param-reassign
      state.items = action.payload;
    },
    setLoaded: (state, action: PayloadAction<boolean>) => {
      // eslint-disable-next-line no-param-reassign
      state.loaded = action.payload;
    },
    setError: (state, action: PayloadAction<boolean>) => {
      // eslint-disable-next-line no-param-reassign
      state.hasError = action.payload;
    },
  },
});

export default availableCurrencySlice.reducer;
export const { setAvaibleCurrency, setLoaded, setError } =
  availableCurrencySlice.actions;
