import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// ROUTER
import DefaultPage from "./routes/default/DefaultPage";
import MainPage from "./routes/main/MainPage";
import PostPage from "./routes/post/PostPage";
import PostViewPage from "./routes/post/PostViewPage";
import PostNewPage from "./routes/post/PostNewPage";
import PostSearchResultPage from "./routes/post/PostSearchResultPage";
import MyPage from "./routes/my/MyPage";
import PortfolioPage from "./routes/portfolio/PortfolioPage";

// react 공홈
import ErrorPage from "./error-page";
// import Home, { loader as homeLoader } from './routes/home';
// import Post, { loader as postLoader } from './routes/post';

// useEffect(()=> {
//   const requestOptions = {
//     method: 'GET',
//     redirect: 'follow'
//   };

//   fetch("https://jsonplaceholder.typicode.com/posts", requestOptions)
//   .then(response => response.json())
//   .then(result => setPhotos(result))
//   .catch(error => console.log('error'. error))
// }, [])

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
        path: "post/search/:searchWord",
        element: <PostSearchResultPage />,
      },
      {
        path: "post/detail/:id",
        element: <PostViewPage />,
      },
      {
        path: "post/new",
        element: <PostNewPage />,
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
