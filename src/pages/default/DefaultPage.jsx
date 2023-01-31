import React, { useEffect, useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "../../components/common/Header";
import axios from "axios";

// img
import SearchSvg from "../../assets/images/icon/search.svg";

export default function DefaultPage() {
  const navigate = useNavigate();
  // const goWhere = () => {
  //   return navigate("/company/registerPost");
  // };

  const [searchActive, setSearchActive] = useState(false);

  // const URL = "https://openapi.naver.com/v1/search/blog?query=";

  // const response = axios.get(URL, {
  //     params: {
  //       serviceKey: process.env.REACT_APP_CLIENT_ID,
  //     }
  // });

  // ADD :: START
  // const [articles, setArticles] = useState(null);
  // const apiGet = async (param) => {
  //   const apiUrl = "https://openapi.naver.com/v1/search/blog?query=" + param;
  //   const resp = await fetch(apiUrl, {
  //     method: "GET",
  //     headers: {
  //       // "Content-Type": "application/json",
  //       "X-Naver-Client-Id": process.env.REACT_APP_CLIENT_ID,
  //       "X-Naver-Client-Secret": process.env.REACT_APP_CLIENT_SECRET,
  //     },
  //   });
  //   resp.json().then((data) => {
  //     setArticles(data.items);
  //   });
  // };

  // useEffect(() => {
  //   apiGet("news", "코스피");
  // }, []);

  // console.log(process.env.REACT_APP_CLIENT_ID, "나왓");

  //ADD :: END

  return (
    <Container>
      <Header />
      <main>
        <div className="main-wrap">
          <div className="search-wrap">
            <button type="submit" className="icon-wrap">
              <img src={SearchSvg} alt="검색" />
            </button>
            <input type="search" placeholder="검색어를 입력해주세요." />
          </div>
          <Outlet />
        </div>
      </main>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  height: 100vh;

  main {
    display: flex;
    flex-direction: column;

    flex: 1;
    height: calc(100vh - 2rem);

    margin: 1rem;

    background-color: var(--white);

    .main-wrap {
      width: 100%;
      max-width: 150rem;

      background-color: var(--gray);
      border-radius: 10px;

      padding: 1rem 1.5rem;
      margin: 0 auto;
    }

    .search-wrap {
      display: flex;
      align-items: center;

      width: 25rem;
      max-width: 100%;

      border-radius: 50px;
      border: 1px solid var(--darkGray);

      padding: 0 1rem;
      margin-bottom: 2rem;

      .icon-wrap {
        width: 1.5rem;
        height: 1.5rem;

        margin-right: 0.5rem;
      }

      input {
        width: calc(100% - 2rem);

        padding: 0.5rem 0;
      }
    }
  }
`;
