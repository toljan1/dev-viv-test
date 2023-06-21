import React from "react";
import { compose } from "@reduxjs/toolkit";
import { connect } from "react-redux";
import { useAppSelector } from "../appStore/hooks";
import { baseCurrency } from "../appStore/selectors";
import { CurrencyTable } from "./currencyTable";
import { SelectCurrency } from "./selectCurrency";

// eslint-disable-next-line react/function-component-definition, import/prefer-default-export
const CurrencyChanger = () => {
  const baseCur = useAppSelector(baseCurrency).baseCurrency;

  return (
    <div>
      <SelectCurrency />

      {baseCur.length ? <CurrencyTable /> : null}
    </div>
  );
};

// eslint-disable-next-line prettier/prettier
export default compose(connect(null))(
  CurrencyChanger,
) as React.ComponentType<any>;
