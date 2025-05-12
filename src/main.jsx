import { createRoot } from "react-dom/client";

import "./assets/css/global.css";
import App from "./components/App";
import { App as AntApp } from "antd";
import Providers from "./provider";

createRoot(document.getElementById("root")).render(
  <Providers>
    <AntApp>
      <App />
    </AntApp>
  </Providers>
);
