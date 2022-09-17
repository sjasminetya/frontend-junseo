import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
