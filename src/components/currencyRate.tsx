import React from "react";
import { compose } from "@reduxjs/toolkit";
import { connect } from "react-redux";
import { useAppDispatch, useAppSelector } from "../appStore/hooks";
import { availableCurrency, baseCurrency } from "../appStore/selectors";
import { setBaseCurrency } from "../features/baseCurrencySlice";
import { CurrencyTable } from "./currencyTable";

// eslint-disable-next-line react/function-component-definition, import/prefer-default-export
const CurrencyChanger = () => {
  const dispatch = useAppDispatch();
  const avaibleCurr = useAppSelector(availableCurrency).items;
  const baseCur = useAppSelector(baseCurrency).baseCurrency;
  const selectValue = baseCur.length ? baseCur : "Choose";

  return (
    <div>
      <select
        value={selectValue}
        onChange={(ev) => dispatch(setBaseCurrency(ev.currentTarget.value))}
      >
        <option value="Choose">Choose</option>
        {Object.keys(avaibleCurr).map((currency) => (
          <option value={currency} key={currency}>
            {currency}
          </option>
        ))}
      </select>

      {baseCur.length ? <CurrencyTable /> : null}
    </div>
  );
};

// eslint-disable-next-line prettier/prettier
export default compose(connect(null))(
  CurrencyChanger,
) as React.ComponentType<any>;
