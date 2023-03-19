import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "bootstrap/dist/css/bootstrap.min.css";

import BaseLayout from "src/components/BaseLayout";
import Router from "src/router";
import { store, persistore } from "src/store";
import "src/index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <PersistGate persistor={persistore}>
          <BaseLayout>
            <Router />
          </BaseLayout>
        </PersistGate>
      </Provider>
    </HashRouter>
  </React.StrictMode>
);
