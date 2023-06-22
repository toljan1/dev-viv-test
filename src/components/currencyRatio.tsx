/* eslint-disable react/function-component-definition */
import { useState } from "react";
import { availableCurrency, baseCurrency } from "../appStore/selectors";
import { useAppDispatch, useAppSelector } from "../appStore/hooks";
import { setAvailableCurrency } from "../appStore/availableCurrency";

const CurrencyRatio = () => {
  const { items: availableCurr } = useAppSelector(availableCurrency);
  const { baseCurrency: baseCurr } = useAppSelector(baseCurrency);
  const [inputValue, setInputValue] = useState(
    +availableCurr[baseCurr].value.toFixed(2),
  );
  const dispatch = useAppDispatch();
  const onChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(+ev.target.value);
  };

  const onBlur = () => {
    if (inputValue !== +availableCurr[baseCurr].value.toFixed(2)) {
      dispatch(
        setAvailableCurrency({
          ...availableCurr,
          [baseCurr]: {
            code: baseCurr,
            value: +inputValue,
          },
        }),
      );
    }
  };

  return (
    <>
      <p className="has-text-centered">
        Your selected currency is: {baseCurr}, ratio is: {inputValue}
      </p>
      <div className="is-flex flex-direction-row is-justify-content-space-evenly">
        <p>If you want, you may change it:</p>
        <input
          type="number"
          value={inputValue}
          onChange={onChange}
          onBlur={onBlur}
          step="0.1"
          min="0.1"
        />
      </div>
    </>
  );
};

export default CurrencyRatio;
