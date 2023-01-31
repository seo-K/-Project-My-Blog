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
  // // 네이버 검색 API 예제 - 블로그 검색
  // var express = require("express");
  // var app = express();
  // const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
  // const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;
  // app.get("/search/blog", function (req, res) {
  //   var api_url = "https://openapi.naver.com/v1/search/blog?query=" + encodeURI(req.query.query); // JSON 결과
  //   //   var api_url = 'https://openapi.naver.com/v1/search/blog.xml?query=' + encodeURI(req.query.query); // XML 결과
  //   var request = require("request");
  //   var options = {
  //     url: api_url,
  //     headers: { "X-Naver-Client-Id": CLIENT_ID, "X-Naver-Client-Secret": CLIENT_SECRET },
  //   };
  //   request.get(options, function (error, response, body) {
  //     if (!error && response.statusCode == 200) {
  //       res.writeHead(200, { "Content-Type": "text/json;charset=utf-8" });
  //       res.end(body);
  //     } else {
  //       res.status(response.statusCode).end();
  //       console.log("error = " + response.statusCode);
  //     }
  //   });
  // });
  // app.listen(3000, function () {
  //   console.log("http://127.0.0.1:3000/search/blog?query=검색어 app listening on port 3000!");
  // });

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setLoading(true);
  //   };
  // });

  return (
    <Routes>
      {/* <ScrollRestoration /> */}
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
