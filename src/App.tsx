import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
