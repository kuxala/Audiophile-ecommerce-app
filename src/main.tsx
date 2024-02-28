import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Checkout from "./pages/Checkout.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    {/* <App /> */}
    <Checkout />
  </BrowserRouter>
);
