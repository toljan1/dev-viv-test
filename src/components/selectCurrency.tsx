import { useAppDispatch, useAppSelector } from "../appStore/hooks";
import { availableCurrency, baseCurrency } from "../appStore/selectors";
import { setBaseCurrency } from "../appStore/baseCurrencySlice";

// eslint-disable-next-line import/prefer-default-export
export function SelectCurrency() {
  const { items: availableCurr } = useAppSelector(availableCurrency);
  const { baseCurrency: baseCurr } = useAppSelector(baseCurrency);
  const dispatch = useAppDispatch();
  const selectValue = baseCurr.length ? baseCurr : "Choose";
  const onChange = (ev: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setBaseCurrency(ev.currentTarget.value));
  };

  return (
    <div className="is-flex is-flex-direction-row is-justify-content-center">
      <div className="select is-rounded">
        <select value={selectValue} onChange={onChange}>
          <option value="Choose" disabled>
            Choose
          </option>
          {Object.keys(availableCurr).map((currency) => (
            <option value={currency} key={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
