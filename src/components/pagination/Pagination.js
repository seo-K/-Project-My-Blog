//react
import { useEffect, useState, useRef } from "react";
import { Link, useHistory } from "react-router-dom";

//css
import styled from "styled-components";

// img
import ArrowSvg from "../../assets/images/icon/pagination_arrow.svg";

// responsive

export default function Pagination({ postsPerPage, totalPosts, paginate }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <PaginationWrap>
      <button
        className="pagination-button prev-button"
        type="button"
        aria-label="Prev"
        // onClick={() => paginate(page - 1)}
        // disabled={page === numPages}
      ></button>
      <ul className="pagination-list">
        {pageNumbers.map((number) => (
          <button
            className="active"
            type="button"
            key={number}
            onClick={() => paginate(number)}
            // aria-current={page === number ? "page" : null}
          >
            {number}
          </button>
        ))}

        {/* {resultList.map((i) => {
          <button
            className="active"
            type="button"
            key={i}
            onClick={() => paginate(i)}
            aria-current={page === i ? "page" : null}
          >
            {i}
          </button>;
        })} */}
      </ul>
      <button
        className="pagination-button next-button"
        type="button"
        aria-label="Next"
        // onClick={() => paginate(page + 1)}
        // disabled={page === numPages}
      ></button>
    </PaginationWrap>
  );
}

const PaginationWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .pagination-button {
    width: 2.5rem;
    height: 2.5rem;
    cursor: pointer;
    background: url(${ArrowSvg}) no-repeat center / contain;
    opacity: 0.8;
    &.next-button {
      transform: rotate(180deg);
    }
    &:hover {
      opacity: 1;
    }
  }

  .pagination-list {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 2rem;
  }
  .pagination-list button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3rem;
    height: 3rem;
    font-size: 1.5rem;
    border: 1px solid transparent;
    border-radius: 50%;
    &:not(:first-child) {
      margin-left: 2rem;
    }
    &:hover {
      color: var(--mainYellow);
    }
    &.active {
      font-weight: bold;
      color: var(--mainYellow);
      border-color: var(--mainYellow);
    }
  }
`;
