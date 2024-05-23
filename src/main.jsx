import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "@redux/store";
import Layout from "@components/Layout/";
import AppRouter from "@components/AppRouter";
import "@assets/scss/style.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Layout>
          <AppRouter />
        </Layout>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
