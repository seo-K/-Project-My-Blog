import React, { useEffect, useState } from "react";
import { useNavigate, Outlet, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import Header from "../../components/common/Header";
import axios from "axios";

// img
import SearchSvg from "../../assets/images/icon/search.svg";
import ArrowIconSvg from "../../assets/images/common/icon_arrow_down.svg";

export default function DefaultPage() {
  const navigate = useNavigate();

  const [searchWord, setSearchWord] = useState(""); // 검색어 값
  // useSearchParams = 현재 위치에 대한 url의 쿼리 문자열을 읽고 수정하는 데 사용
  // 현재 위치의 검색 매개변수와 이를 업데이트하는데 사용할 수 있는 함수라는 두 값의 배열을 반환
  // serializeFormQuery form 태그와 함께사용
  let [searchParams, setSearchParams] = useSearchParams();
  //검색 할때 실행되는 함수
  // const logSearchParams = () => {
  //   console.log(searchParams.get("samplekey"));  // url is assumed as https://.....com?samplekey="dummy"
  //   navigate(`/post/search/${searchWord}`);
  // };
  // logSearchParams();

  const handleSearch = (e) => {
    // let params = serializeFormQuery(e.target);
    // setSearchParams(params);
    navigate(`/post/search/${searchWord}`);
    setSearchWord(e.target.value);
    // setSearchParams({ searchWord: e.target.value });
    // setSearchParams(e.target.value);
  };

  return (
    <Container>
      <Header />
      <main className="main">
        <div className="main__inner">
          {/* 검색 */}
          <div className="search">
            {/* <div className="search__select-box">
              <select name="" id="">
                <option value="All">All</option>
                <option value="Html">Html</option>
                <option value="Css">Css</option>
                <option value="Js">Js</option>
                <option value="React">React</option>
                <option value="etc">etc</option>
              </select>
            </div> */}
            <div className="search__search-wrap">
              <button
                type="submit"
                className="icon-wrap"
                onClick={(e) => {
                  if (searchWord.length > 0) {
                    handleSearch(e);
                  } else {
                    alert("검색어를 입력하세요!");
                  }
                }}
              >
                <img src={SearchSvg} alt="검색" />
              </button>
              <input
                onChange={(e) => {
                  if (e.target.value.length === 0) {
                    setSearchWord("");
                  }
                  if (e.target.value.length > 0) {
                    setSearchWord(e.target.value);
                  }
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    if (e.target.value.length > 0) {
                      handleSearch(e);
                    } else {
                      alert("검색어를 입력하세요!");
                    }
                  }
                }}
                type="search"
                placeholder="검색어를 입력해주세요."
                value={searchWord}
              />
            </div>
          </div>
          <Outlet searchWord={searchWord} />
        </div>
      </main>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  height: 100vh;

  .main {
    flex: 1;
    min-height: 100vh;

    padding: 3rem;
    border-radius: 5rem 0 0 5rem;
    background-color: var(--beige);

    &__inner {
      width: 100%;
      max-width: 150rem;

      border-radius: 10px;
      margin: 0 auto;
    }
  }
  .search {
    display: flex;
    margin-bottom: 2rem;

    &__select-box {
      flex-shrink: 0;
      width: 10rem;
      margin-right: 1rem;

      select {
        width: 100%;
        height: 100%;
        font-size: 1.4rem;
        text-indent: -0.7rem;
        text-align: center;
        border-radius: 50px;
        border: 2px solid var(--mainYellow);
        background: url(${ArrowIconSvg}) no-repeat 85% center / 1rem 1rem;
      }
    }

    &__search-wrap {
      display: flex;
      align-items: center;
      width: 35rem;
      max-width: 100%;
      border-radius: 50px;
      border: 2px solid var(--mainYellow);
      padding: 1rem 2rem;

      .icon-wrap {
        flex-shrink: 0;
        width: 2rem;
        height: 2rem;

        margin-right: 1rem;
      }

      input {
        flex: 1;
        font-size: 1.4rem;
        padding: 0.5rem 0;
      }
    }
  }
`;
