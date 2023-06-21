import React, { lazy, Suspense, useEffect } from "react";
import "./App.css";
import "./App.scss";
import "bulma/css/bulma.min.css";
import { NavLink, Route, Routes } from "react-router-dom";
import { client } from "./fetchCurrency";
import { useAppDispatch } from "./appStore/hooks";
import {
  setAvaibleCurrency,
  setError as setAvaibleCurError,
} from "./features/availableCurrency";
import { AllCurrency } from "./types/Currency";

const CurrencyChanger = lazy(
  () => import("./components/CurrencyConverterPage"),
);

const CurrencyRate = lazy(() => import("./components/currencyRate"));

const apiKey = "WLQml9M6HEdAEMlshD8yPCARKIJg2Sww0daEGJpX";

export function App() {
  const dispatch = useAppDispatch();

  function loadAvaibleCurr() {
    client
      .get<{ data: AllCurrency }>(apiKey)
      .then((currency) => {
        dispatch(setAvaibleCurrency(currency.data));
      })
      .catch(() => dispatch(setAvaibleCurError));
  }

  useEffect(() => loadAvaibleCurr(), []);

  return (
    <div className="App">
      {/* eslint-disable-next-line react/button-has-type */}
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
    </div>
  );
}

export default App;
