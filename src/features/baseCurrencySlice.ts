import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  baseCurrency: string;
};

const initialBase: InitialState = {
  baseCurrency: "",
};

const secondCurrencySlice = createSlice({
  name: "base",
  initialState: initialBase,
  reducers: {
    setBaseCurrency: (state, action: PayloadAction<string>) => {
      // eslint-disable-next-line no-param-reassign
      state.baseCurrency = action.payload;
    },
  },
});

export default secondCurrencySlice.reducer;
export const { setBaseCurrency } = secondCurrencySlice.actions;
