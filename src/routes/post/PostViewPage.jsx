import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
// component
import BasicButton from "../../components/common/BasicButton";
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

  const editButtonData = {
    link: "edit",
    text: "수정",
  };
  const deleteButtonData = {
    link: "delete",
    text: "삭제",
  };

  return (
    <Container>
      <div className="post-detail">
        <hgroup>
          <h2>{PostData[id].category}</h2>
          <button className="post-detail__share" type="button">
            <span className="blind">공유</span>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M8.68445 10.6578L13 8.50003M15.3157 16.6578L11 14.5M21 6C21 7.65685 19.6569 9 18 9C16.3431 9 15 7.65685 15 6C15 4.34315 16.3431 3 18 3C19.6569 3 21 4.34315 21 6ZM9 12C9 13.6569 7.65685 15 6 15C4.34315 15 3 13.6569 3 12C3 10.3431 4.34315 9 6 9C7.65685 9 9 10.3431 9 12ZM21 18C21 19.6569 19.6569 21 18 21C16.3431 21 15 19.6569 15 18C15 16.3431 16.3431 15 18 15C19.6569 15 21 16.3431 21 18Z"
                  stroke="#59616f"
                  stroke-width="1.5"
                ></path>
              </g>
            </svg>
          </button>
        </hgroup>
        {PostData[id].postImg ? (
          <figure>
            <img src={PostData[id].postImg} alt="포스트 이미지" />
          </figure>
        ) : (
          <figure className="empty-img-wrap">
            <img src={ImgSvg} alt="포스트 이미지가 없습니다." />
          </figure>
        )}

        <h3>{PostData[id].title}</h3>

        <hr />
        <p className="post-text">{PostData[id].desc} 설명</p>
        <time dateTime={PostData[id].date}>{PostData[id].date}</time>
      </div>

      <div className="util-wrap">
        <BasicButton data={editButtonData} />
        <BasicButton data={deleteButtonData} />
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
    hgroup {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1.8rem;
    }
    h2 {
      font-size: 2.5rem;
      color: var(--deepDarkGray);
    }
    h3 {
      font-size: 5rem;
      line-height: 1.3;
    }
    &__share {
      width: 3.5rem;
      height: 3.5rem;
      svg {
        width: 100%;
        height: 100%;
      }
    }
    figure {
      width: 100%;
      height: 40rem;
      object-fit: contain;
      border-radius: 1rem;
      overflow: hidden;
      margin-bottom: 2rem;
    }
    .post-text {
      padding-bottom: 3rem;
      font-size: 1.4rem;
      line-height: 1.5;
    }
    time {
      width: 100%;
      color: var(--deepDarkGray);
      font-size: 1.4rem;
      text-align: right;
    }
  }

  .util-wrap {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
    align-items: center;
    * {
      font-size: 1.5rem;
    }
  }
`;
