import { useAppDispatch, useAppSelector } from "../appStore/hooks";
import { availableCurrency, baseCurrency } from "../appStore/selectors";
import { setBaseCurrency } from "../features/baseCurrencySlice";

// eslint-disable-next-line import/prefer-default-export
export function SelectCurrency() {
  const availableCurr = useAppSelector(availableCurrency).items;
  const baseCur = useAppSelector(baseCurrency).baseCurrency;
  const dispatch = useAppDispatch();
  const selectValue = baseCur.length ? baseCur : "Choose";

  return (
    <select
      value={selectValue}
      onChange={(ev) => dispatch(setBaseCurrency(ev.currentTarget.value))}
    >
      <option value="Choose">Choose</option>
      {Object.keys(availableCurr).map((currency) => (
        <option value={currency} key={currency}>
          {currency}
        </option>
      ))}
    </select>
  );
}
