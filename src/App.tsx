import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Success from "./pages/Success";
import { RouterPath } from "./routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={<Navigate replace to={RouterPath.HOME} />}
          path="/"
        />
        <Route
          element={<Home />}
          path={RouterPath.HOME}
        />
        <Route
          element={<Product />}
          path={RouterPath.PRODUCT}
        />
        <Route
          element={<Cart />}
          path={RouterPath.CART}
        />
        <Route
          element={<Checkout />}
          path={RouterPath.CHECKOUT}
        />
        <Route
          element={<Success />}
          path={RouterPath.SUCCESS}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
