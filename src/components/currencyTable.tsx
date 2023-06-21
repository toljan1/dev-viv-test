import { useAppSelector } from "../appStore/hooks";
import { availableCurrency, baseCurrency } from "../appStore/selectors";

// eslint-disable-next-line import/prefer-default-export, react/function-component-definition
export const CurrencyTable = () => {
  const availableCurr = useAppSelector(availableCurrency).items;
  const baseCur = useAppSelector(baseCurrency).baseCurrency;

  return (
    <table>
      <thead>
        <tr>
          <th>Base currency</th>
          <th>Value</th>
          <th>Equal</th>
          <th>Value</th>
          <th>Selected currency</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(availableCurr).map((currency) => {
          if (currency[0] === baseCur) {
            return null;
          }

          const baseCurValue =
            +availableCurr[baseCur].value < +currency[1].value
              ? 1
              : Math.round(+availableCurr[baseCur].value / +currency[1].value);
          const selectedCurValue =
            +availableCurr[baseCur].value < +currency[1].value
              ? Math.round(+currency[1].value / +availableCurr[baseCur].value)
              : 1;

          return (
            <tr key={currency[0]}>
              <td>{baseCur}</td>
              <td>{baseCurValue}</td>
              <td>===</td>
              <td>{selectedCurValue}</td>
              <td>{currency[0]}</td>
            </tr>
          );
        })}
      </tbody>
      <tfoot>
        <tr>
          <th>Base currency</th>
          <th>Value</th>
          <th>Equal</th>
          <th>Value</th>
          <th>Selected currency</th>
        </tr>
      </tfoot>
    </table>
  );
};
