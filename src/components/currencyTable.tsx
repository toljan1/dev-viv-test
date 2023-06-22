import { useAppSelector } from "../appStore/hooks";
import { availableCurrency, baseCurrency } from "../appStore/selectors";

// eslint-disable-next-line import/prefer-default-export, react/function-component-definition
export const CurrencyTable = () => {
  const { items: availableCurr } = useAppSelector(availableCurrency);
  const { baseCurrency: baseCurr } = useAppSelector(baseCurrency);

  const exchangeHandler = (basicValue: number, currencyValue: number) => {
    const baseCurValue =
      basicValue < currencyValue ? 1 : +(basicValue / currencyValue).toFixed(2);
    const selectedCurValue =
      basicValue < currencyValue ? +(currencyValue / basicValue).toFixed(2) : 1;

    return [baseCurValue, selectedCurValue];
  };

  return (
    <div className="is-flex is-flex-direction-row is-justify-content-center">
      <table className="table">
        <thead className="thead">
          <tr className="tr">
            <th className="th">Value</th>
            <th className="th">Another currency</th>
            <th className="th">Equal</th>
            <th className="th">Value</th>
            <th className="th">Selected currency</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {Object.entries(availableCurr).map((currency) => {
            if (currency[0] === baseCurr) {
              return null;
            }

            const [baseVal, currVal] = exchangeHandler(
              +availableCurr[baseCurr].value,
              +currency[1].value,
            );

            return (
              <tr key={currency[0]} className="tr">
                <td className="td">{currVal}</td>
                <td className="td">{currency[0]}</td>
                <td className="td">===</td>
                <td className="td">{baseVal}</td>
                <td className="td">{baseCurr}</td>
              </tr>
            );
          })}
        </tbody>
        <tfoot className="tfoot">
          <tr className="tr">
            <th className="th">Value</th>
            <th className="th">Another currency</th>
            <th className="th">Equal</th>
            <th className="th">Value</th>
            <th className="th">Selected currency</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};
