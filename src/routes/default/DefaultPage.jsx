import React, { useEffect, useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "../../components/common/Header";
import axios from "axios";

// img
import SearchSvg from "../../assets/images/icon/search.svg";

export default function DefaultPage() {
  const navigate = useNavigate();

  return (
    <Container>
      <Header />
      <main className="main">
        <div className="main__inner">
          {/* 검색 */}
          <div className="main__search-wrap">
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

  & .main {
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

    &__search-wrap {
      display: flex;
      align-items: center;

      width: 35rem;
      max-width: 100%;

      border-radius: 50px;
      border: 2px solid var(--mainYellow);

      padding: 1rem 2rem;
      margin-bottom: 2rem;

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
