import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import GlobalStyles from "./components/GlobalStyles";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyles >
      <Router>
        <App />
      </Router>
    </GlobalStyles>    
  </React.StrictMode>
);
