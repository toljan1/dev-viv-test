import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  baseCurrency: string;
};

const initialBase: InitialState = {
  baseCurrency: "",
};

const baseCurrencySlice = createSlice({
  name: "base",
  initialState: initialBase,
  reducers: {
    setBaseCurrency: (state, action: PayloadAction<string>) => {
      // eslint-disable-next-line no-param-reassign
      state.baseCurrency = action.payload;
    },
  },
});

export default baseCurrencySlice.reducer;
export const { setBaseCurrency } = baseCurrencySlice.actions;
