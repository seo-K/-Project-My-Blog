import React from "react";
import { Routes, Route, ScrollRestoration } from "react-router-dom";
import "./App.css";

import MainPage from "./pages/main/MainPage";

export default function App() {
  return (
    <Routes>
      {/* <ScrollRestoration /> */}
      <Route path="/" element={<MainPage />} />
      {/* <Route path="/post" element={<MainPage />} /> */}
    </Routes>
  );
}
