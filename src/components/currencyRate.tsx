import React from "react";
import { useAppSelector } from "../appStore/hooks";
import { baseCurrency } from "../appStore/selectors";
import { CurrencyTable } from "./currencyTable";
import { SelectCurrency } from "./selectCurrency";

// eslint-disable-next-line react/function-component-definition, import/prefer-default-export
const CurrencyRate = () => {
  const { baseCurrency: baseCurr } = useAppSelector(baseCurrency);

  return (
    <div>
      <SelectCurrency />

      {baseCurr.length ? <CurrencyTable /> : null}
    </div>
  );
};

// eslint-disable-next-line prettier/prettier
export default CurrencyRate;
