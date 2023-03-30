import { useEffect, useState } from "react";
import { Routes, Route, ScrollRestoration } from "react-router-dom";
import "./App.css";

import DefaultPage from "./pages/default/DefaultPage";
import MainPage from "./pages/main/MainPage";
import PostPage from "./pages/post/PostPage";
import PostViewPage from "./pages/post/PostViewPage";
import MyPage from "./pages/my/MyPage";
import PortfolioPage from "./pages/portfolio/PortfolioPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<DefaultPage />}>
        <Route path="" element={<MainPage />} />
        <Route path="post" element={<PostPage />} />
        <Route path="post/:postId" element={<PostViewPage />} />
        <Route path="my" element={<MyPage />} />
      </Route>
      <Route path="/portfolio" element={<PortfolioPage />} />
    </Routes>
  );
}
