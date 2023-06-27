//react
import { useEffect, useState, useRef } from "react";
import { Link, useHistory } from "react-router-dom";

//css
import styled from "styled-components";

// img
import ArrowSvg from "../../assets/images/icon/pagination_arrow.svg";

// responsive

export default function Pagination({ postsPerPage, totalPosts, paginate, currentPage }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  console.log(currentPage);
  return (
    <PaginationWrap>
      <button
        className="pagination-button prev-button"
        type="button"
        aria-label="Prev"
        onClick={() => paginate(currentPage - 1)}
        disabled={currentPage === 1}
      ></button>
      <ul className="pagination-list">
        {pageNumbers.map((pageNumber) => (
          <button
            className={currentPage === pageNumber ? "active" : null}
            type="button"
            key={pageNumber}
            onClick={() => paginate(pageNumber)}
            aria-current={currentPage === pageNumber ? "page" : null}
          >
            {pageNumber}
          </button>
        ))}
      </ul>
      <button
        className="pagination-button next-button"
        type="button"
        aria-label="Next"
        onClick={() => paginate(currentPage + 1)}
        disabled={currentPage === totalPosts}
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
    background: url(${ArrowSvg}) no-repeat center / contain;
    opacity: 0.8;
    &.next-button {
      transform: rotate(180deg);
    }
    &:hover {
      opacity: 1;
    }
    &:disabled {
      cursor: unset;
      opacity: 0.2;
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
