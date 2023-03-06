import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./store"
import App from "./App";
import "./index.css";

const root = createRoot(document.getElementById("root"));

root.render(
  <div className="bg-black">
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </div>
);

