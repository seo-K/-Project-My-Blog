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

- 연습용 서버 생성
  // https://react.vlpt.us/redux-middleware/08-json-server.html 연습용 서버
  // https://pinenamu.tistory.com/414

// 1. src 폴더 밖에 data.json 파일 생성
// 2. data.json 생성
// 3. data.json 기반으로 서버 오픈
// $ npx json-server ./data.json --port 4000
