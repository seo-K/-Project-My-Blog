import React, { useEffect, useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "../../components/common/Header";

// image
import SearchSvg from "../../assets/images/icon/search.svg";

export default function DefaultPage() {
  const navigate = useNavigate();
  // const goWhere = () => {
  //   return navigate("/company/registerPost");
  // };

  const [searchActive, setSearchActive] = useState(false);

  return (
    <Container>
      <Header />
      <main>
        <div className="search-wrap">
          <button type="submit" className="icon-wrap">
            <img src={SearchSvg} alt="검색" />
          </button>
          <input type="search" placeholder="검색어를 입력해주세요." />
        </div>
        <Outlet />
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

    background-color: var(--gray);
    border-radius: 20px;

    padding: 1rem 1.5rem;
    margin: 1rem;

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
