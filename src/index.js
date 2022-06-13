import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { initializeContract } from "./utils/near";
import "bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";

window.nearInitPromise = initializeContract()
  .then(() => {
    const root = ReactDOM.createRoot(
      document.getElementById("root")
    )
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>)

    // ReactDOM.render(
    //   <React.StrictMode>
    //     <App />
    //   </React.StrictMode>,
    //   document.getElementById("root")
    // );
  })
  .catch(console.error);

reportWebVitals();