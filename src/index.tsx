import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { HashRouter as Router } from "react-router-dom";

import { store } from "./appStore/store";
import { App } from "./App";
import reportWebVitals from "./reportWebVitals";

// eslint-disable-next-line react/function-component-definition
const Root = () => (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById("root"));

reportWebVitals();
