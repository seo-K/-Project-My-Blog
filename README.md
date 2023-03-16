# Blog

- react-router 6.8.1

* createBrowserRouter 사용하여 작업

```
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,

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
          path: "post/detail/:id",
          element: <PostViewPage />,
        },
      ],
      errorElement: <ErrorPage />,
    },
    {
      path: "/portfolio",
      element: <PortfolioPage />,
    },
  ]);
```
