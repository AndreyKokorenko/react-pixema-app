import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "store";
import { App } from "./App";
import { GlobalStyles } from "ui";
import "./firebase";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <Provider store={store}>
    <GlobalStyles />
    <App />
  </Provider>
);
