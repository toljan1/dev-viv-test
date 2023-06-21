import React, { lazy, Suspense, useEffect } from "react";
import "./App.css";
import "./App.scss";
import "bulma/css/bulma.min.css";
import { NavLink, Route, Routes } from "react-router-dom";
import { client } from "./fetchCurrency";
import { useAppDispatch, useAppSelector } from "./appStore/hooks";
import {
  setAvaibleCurrency,
  setError as setAvaibleCurError,
} from "./features/availableCurrency";
import { AllCurrency } from "./types/Currency";
import { baseCurrency } from "./appStore/selectors";
import { SelectCurrency } from "./components/selectCurrency";

const CurrencyChanger = lazy(
  () => import("./components/CurrencyConverterPage"),
);

const CurrencyRate = lazy(() => import("./components/currencyRate"));

const apiKey = "WLQml9M6HEdAEMlshD8yPCARKIJg2Sww0daEGJpX";

export function App() {
  const dispatch = useAppDispatch();
  const baseCurr = useAppSelector(baseCurrency).baseCurrency;

  function loadAvaibleCurr() {
    client
      .get<{ data: AllCurrency }>(apiKey)
      .then((currency) => {
        dispatch(setAvaibleCurrency(currency.data));
      })
      .catch(() => dispatch(setAvaibleCurError));
  }

  useEffect(() => loadAvaibleCurr(), []);

  console.log(baseCurr.length);

  return (
    <div className="App">
      {baseCurr.length === 0 ? (
        <SelectCurrency />
      ) : (
        <>
          <nav>
            <div>
              <div>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/change">Currency change</NavLink>
                <NavLink to="/rate">Current currency rate</NavLink>
              </div>
            </div>
          </nav>

          <div>
            <div>
              <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                  <Route path="/" element={<h1>Home page</h1>} />
                  <Route path="change" element={<CurrencyChanger />} />
                  <Route path="rate" element={<CurrencyRate />} />
                  <Route path="*" element={<h1>Page not found</h1>} />
                </Routes>
              </Suspense>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
