import React, { lazy, Suspense, useEffect } from "react";
import "./App.css";
import "./App.scss";
import "bulma/bulma.sass";
import { NavLink, Route, Routes } from "react-router-dom";
import { client } from "./fetchCurrency";
import { useAppDispatch, useAppSelector } from "./appStore/hooks";
import {
  setAvailableCurrency,
  setError as setAvaibleCurError,
} from "./appStore/availableCurrency";
import { AllCurrency } from "./types/Currency";
import { baseCurrency } from "./appStore/selectors";
import { SelectCurrency } from "./components/selectCurrency";

const CurrencyChanger = lazy(
  () => import("./components/CurrencyConverterPage"),
);

const CurrencyRate = lazy(() => import("./components/currencyRate"));

const RatioChangePage = lazy(() => import("./components/currencyRatio"));

const apiKey = "Fn2nmFwp6oNPNCsNjneWbHneuhYDoJB8d6TM8X5Y";

export function App() {
  const dispatch = useAppDispatch();
  const { baseCurrency: baseCurr } = useAppSelector(baseCurrency);

  function loadAvaibleCurr() {
    client
      .get<{ data: AllCurrency }>(apiKey)
      .then((currency) => {
        dispatch(setAvailableCurrency(currency.data));
      })
      .catch(() => dispatch(setAvaibleCurError));
  }

  useEffect(() => loadAvaibleCurr(), []);

  return (
    <div className="container">
      <div className="columns is-centered">
        <div className="column is-half">
          {baseCurr.length === 0 ? (
            <SelectCurrency />
          ) : (
            <>
              <nav className="navbar">
                <div className="is-flex">
                  <NavLink to="/" className="navbar-item">
                    Home
                  </NavLink>
                  <NavLink to="/change" className="navbar-item">
                    Currency change
                  </NavLink>
                  <NavLink to="/rate" className="navbar-item">
                    Current currency rate
                  </NavLink>
                  <NavLink to="/ratio" className="navbar-item">
                    Ratio change
                  </NavLink>
                </div>
              </nav>

              <div>
                <div>
                  <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                      <Route
                        path="/"
                        element={<h1 className="title is-1">Home page</h1>}
                      />
                      <Route path="change" element={<CurrencyChanger />} />
                      <Route path="rate" element={<CurrencyRate />} />
                      <Route path="ratio" element={<RatioChangePage />} />
                      <Route path="*" element={<h1>Page not found</h1>} />
                    </Routes>
                  </Suspense>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
