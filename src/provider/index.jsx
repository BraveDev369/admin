import React from "react";
import { AntdProvider } from "./AntD";
import { BrowserRouter as Router } from "react-router-dom";
import ReduxProvider from "./redux";

export default function Providers({ children }) {
  return (
    <AntdProvider>
      <Router>
        <ReduxProvider>{children}</ReduxProvider>
      </Router>
    </AntdProvider>
  );
}
