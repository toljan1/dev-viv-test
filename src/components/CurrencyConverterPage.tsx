import React, { useEffect, useState } from "react";
import { compose } from "@reduxjs/toolkit";
import { connect } from "react-redux";
import { useAppDispatch, useAppSelector } from "../appStore/hooks";
import { availableCurrency } from "../appStore/selectors";
import { setError } from "../features/availableCurrency";

// eslint-disable-next-line react/function-component-definition, import/prefer-default-export
const CurrencyChanger = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [avaibleSumAfterExchange, setAvaibleSumAfterExchange] = useState<
    null | number
  >(null);
  const { hasError, items: availableCurr } = useAppSelector(availableCurrency);
  const dispatch = useAppDispatch();
  function sumAfterExchange(
    value: number,
    firstCur: number,
    secondCur: number,
  ) {
    if (firstCur > secondCur) {
      return +((value * secondCur) / firstCur).toFixed(2);
    }

    return +(value * firstCur * secondCur).toFixed(2);
  }

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const [value, firstCur, assistantWord, secondCur] = searchTerm.split(" ");

      if (
        availableCurr[firstCur?.toUpperCase()]?.value &&
        availableCurr[secondCur?.toUpperCase()]?.value &&
        typeof +value === "number"
      ) {
        dispatch(setError(false));
        setAvaibleSumAfterExchange(
          sumAfterExchange(
            +value,
            availableCurr[firstCur?.toUpperCase()]?.value,
            availableCurr[secondCur?.toUpperCase()]?.value,
          ),
        );
      } else if (searchTerm.length) {
        dispatch(setError(true));
      }
    }, 2000);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  return (
    <div>
      <input
        type="text"
        placeholder="Example: 15 USD in UAH"
        value={searchTerm}
        onChange={(ev) => setSearchTerm(ev.target.value)}
      />
      {avaibleSumAfterExchange && !hasError ? (
        <p>You can get: {avaibleSumAfterExchange}</p>
      ) : null}

      {searchTerm.length === 0 && !hasError ? <p>Enter your request</p> : null}

      {hasError ? <p>Enter valid currency</p> : null}
    </div>
  );
};

// eslint-disable-next-line prettier/prettier
export default compose(connect(null))(
  CurrencyChanger,
) as React.ComponentType<any>;
