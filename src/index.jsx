import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// ROUTER
import DefaultPage from "./routes/default/DefaultPage";
import MainPage from "./routes/main/MainPage";
import PostPage from "./routes/post/PostPage";
import PostViewPage from "./routes/post/PostViewPage";
import MyPage from "./routes/my/MyPage";
import PortfolioPage from "./routes/portfolio/PortfolioPage";

// react 공홈
import Root from "./routes/root";
import Contact from "./routes/contact";
import ErrorPage from "./error-page";
// import Home, { loader as homeLoader } from './routes/home';
// import Post, { loader as postLoader } from './routes/post';

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultPage />,

    children: [
      {
        path: "",
        element: <MainPage />,
      },
      {
        path: "post",
        element: <PostPage />,
      },
      {
        path: 'post/:postId"',
        element: <PostViewPage />,
      },
      {
        path: "my",
        element: <MyPage />,
      },
    ],
    errorElement: <ErrorPage />,
  },
  {
    path: "/portfolio",
    element: <PortfolioPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

// useOutletContext 다크모드
