import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
// img
import ImgSvg from "../../assets/images/icon/image.svg";

// mock data
import { PostData } from "../../MockData";

export default function PostViewPage() {
  const { id } = useParams();
  // let 찾은상품 = props.shoes.find(function(상품){
  //   return 상품.id == id
  // });
  console.log(id);

  return (
    <Container>
      <div className="post-detail">
        <hgroup className="post-detail__title">
          <h2>
            <b>{PostData[id].category}</b>
            {PostData[id].title}
          </h2>
          <time datetime={PostData[id].date}>{PostData[id].date}</time>
        </hgroup>
        <hr />
        {PostData[id].postImg ? (
          <figure>
            <img src={PostData[id].postImg} alt="포스트 이미지" />
          </figure>
        ) : (
          <figure className="empty-img-wrap">
            <img src={ImgSvg} alt="포스트 이미지가 없습니다." />
          </figure>
        )}
        <p className="post-text">{PostData[id].desc}</p>
      </div>
      <hr />
      <div className="util-wrap">
        <Link to="edit">수정</Link>
        <Link to="delete">삭제</Link>
        <button type="button">공유</button>
      </div>
    </Container>
  );
}

const Container = styled.div`
  hr {
    height: 0.1rem;
    background-color: var(--deepDarkGray);
    margin: 1rem 0 2rem;
  }

  .post-detail {
    h2 {
      font-size: 2rem;
    }
    b {
      margin-right: 0.6rem;
    }
    time {
      display: inline-block;
      width: 100%;
      color: var(--deepDarkGray);
      font-size: 0.8rem;
      text-align: right;
    }
    figure {
      max-width: 100%;
      width: auto;
      height: 20rem;
      object-fit: contain;
      margin-bottom: 2rem;
    }
    .post-text {
      padding-bottom: 3rem;
      font-size: 1.4rem;
    }
  }

  .util-wrap {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
    align-items: center;
    * {
      font-size: 1rem;
    }
  }
`;
