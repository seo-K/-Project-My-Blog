# Blog

- 개인 블로그 작성

# npm

### - react-router 6.8.1

- createBrowserRouter 사용하여 작업

### - TOAST UI Editor

- npm i @toast-ui/react-editor

##### 이슈 발생

- 이미지 삽입 시, img 태그 src에 이미지 데이터 전체가 base64로 인코딩 되어 주입 -> DB 저장 시, 레코드 한줄마다 몇 Mb씩 차지하는 상황 발생
- Toast-UI Editor 에서 첨부한 이미지를 File 객체에 담아서 다뤄야함!
- editor 자체에 메소드 [addImageBlobHook] 훅 사용. ( 첨부된 이미지를 file 객체로 받고, img 태그의 src와 alt 속성을 설정해 화면에 표시하는 역할)

```
인자로 받은 url(이미지 경로)를 img 태그 src에 주입하고, text인자로 받은 값은 alt에 주입한다.

type HookCallback = (url: string, text?: string) => void;

export type HookMap = {
  addImageBlobHook?: (blob: Blob | File, callback: HookCallback) => void;
};


```

1.  이미지 파일 서버로 전송
2.  파일이 저장된 경로만 DB저장 후, img 태그의 src 속성으로 사용.

3.  blob : 첨부된 이미지를 file 형태로 받기
4.  callback(url, string) : img 태그를 만들어 화면에 이미지를 표시. 인자로 받은 url(이미지 경로)를 img 태그의 src에 주입하고, text 인자로 받은 값은 alt에 주입함.

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

# 연습용 서버 생성

```
https://react.vlpt.us/redux-middleware/08-json-server.html 연습용 서버
https://pinenamu.tistory.com/414

1. src 폴더 밖에 data.json 파일 생성
2. data.json 생성
3. data.json 기반으로 서버 오픈

$ npx json-server ./data.json --port 4000
```

# 추가한 기능

- 모달 ESC 버튼으로 닫기
- 에디터
- 스켈레톤 UI

# 추가할 기능

- 글 삭제, 수정
- 글 좋아요 기능
- 댓글 추가, 수정, 삭제
- 대댓글 기능
- 글 필터링 기능 ( 탭으로 분리된 부분)
- 공유하기 기능
- 페이지 네이션, 무한스크롤
- select 리스트 따로 데이터로 빼기
