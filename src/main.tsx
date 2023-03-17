import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";

import BaseLayout from "src/components/BaseLayout";
import Router from "src/router";
import { store } from "src/store";
import "src/index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <BaseLayout>
          <Router />
        </BaseLayout>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
