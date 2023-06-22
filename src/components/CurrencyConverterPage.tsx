import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../appStore/hooks";
import { availableCurrency } from "../appStore/selectors";
import { setError } from "../appStore/availableCurrency";

function sumAfterExchange(value: number, firstCur: number, secondCur: number) {
  if (firstCur > secondCur) {
    return +((value * secondCur) / firstCur).toFixed(2);
  }

  return +(value * firstCur * secondCur).toFixed(2);
}

// eslint-disable-next-line react/function-component-definition, import/prefer-default-export
const CurrencyConverterPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [avaibleSumAfterExchange, setAvaibleSumAfterExchange] = useState<
    null | number
  >(null);
  const { hasError, items: availableCurr } = useAppSelector(availableCurrency);
  const dispatch = useAppDispatch();

  const onChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(ev.target.value);
  };

  function converterHandler() {
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
  }

  useEffect(() => {
    converterHandler();
  }, [searchTerm]);

  return (
    <div className="container is-flex is-justify-content-center">
      <div className="columns">
        <div className="column">
          <input
            className="input is-primary is-medium is-rounded"
            type="text"
            placeholder="Example: 15 USD in UAH"
            value={searchTerm}
            onChange={onChange}
          />
          {avaibleSumAfterExchange && !hasError ? (
            <p className="is-subtitle is-1 has-text-success">
              You can get: {avaibleSumAfterExchange}
            </p>
          ) : null}

          {searchTerm.length === 0 && !hasError ? (
            <p className="is-subtitle is-1 has-text-info">Enter your request</p>
          ) : null}

          {hasError ? (
            <p className="is-subtitle is-1 has-text-danger">
              Enter valid currency
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
};

// eslint-disable-next-line prettier/prettier
export default CurrencyConverterPage;
