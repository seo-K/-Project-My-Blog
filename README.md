# Blog

- 개인 블로그 작성

# npm

### - react-router 6.8.1

- createBrowserRouter 사용하여 작업

### - TOAST UI Editor

- npm i @toast-ui/react-editor

  #### 1. Editor color picker

  - npm i @toast-ui/editor-plugin-color-syntax

  #### 2. highlight (code highlighter)

  - npm i @toast-ui/editor-plugin-code-syntax-highlight

  #### 3. prisimjs (구문 강조 표시기)

  - npm i prismjs

### - moment (닐찌, 시간 포맷)

- npm i moment

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

## 연습용 서버 생성

```
https://react.vlpt.us/redux-middleware/08-json-server.html 연습용 서버
https://pinenamu.tistory.com/414

1. src 폴더 밖에 data.json 파일 생성
2. data.json 생성
3. data.json 기반으로 서버 오픈

$ npx json-server ./data.json --port 4000
```

### 추가할 기능

- 글 삭제, 수정
- 글 좋아요 기능
- 댓글 추가, 수정, 삭제
- 대댓글 기능
- 글 필터링 기능 ( 탭으로 분리된 부분)
- 공유하기 기능
