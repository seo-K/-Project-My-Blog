import React, { useEffect, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Map from "../../components/common/Map";
import PostContent from "../../components/content/PostContent";

// image
import { PostData } from "../../MockData";

export default function MainPage() {
  const navigate = useNavigate();

  return (
    <Container>
      <article className="background">
        <h3 className="title">My Blog</h3>
        <div className="background__content">
          <p>ㅇㅇ이의 블로그입니다</p>
        </div>
      </article>
      <article className="info">
        <h3 className="title">info</h3>
        <div className="info__content-wrap">
          <div className="info__content">
            <p>Name: ㅇㅇ kang</p>
            <p>email: ㅇㅇ@naver.com</p>
            <p>Name</p>
          </div>
        </div>
      </article>
      <article className="post">
        <h3 className="title">Post</h3>
        <ul className="post__content-wrap">
          {PostData?.filter((item, index) => index < 3).map((list) => {
            return (
              <li key={"postList" + list.id}>
                <PostContent data={list} />
              </li>
            );
          })}
        </ul>
      </article>
      {/* <article className="git-article">
        <h3 className="title">Git Status</h3>
        <div className="content-wrap">
          <div className="git-status-wrap">
            <img src="https://ghchart.rshah.org/00565b/seo-K" alt="git 잔디 이미지" />
          </div>
        </div>
      </article>
      <article className="area-article">
        <h3 className="title">Area</h3>
        <div className="content-wrap map-area">
          <Map />
        </div>
      </article> */}
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  flex: 1;

  display: grid;
  width: 100%;
  height: 100%;
  gap: 1rem;

  grid-template-rows: repeat(auto-fit, minmax(50rem, 1fr));
  grid-template-columns: 1fr 2fr;
  grid-template-areas:
    "background background"
    "info post";

  article {
    position: relative;
    padding: 2rem;

    background-color: var(--whiteOpacity);
    backdrop-filter: blur(1rem);
    border-radius: 2rem;

    & .title {
      font-size: 2.4rem;
      font-weight: 600;

      margin-bottom: 3rem;
    }
  }

  & .background {
    grid-area: background;

    &:after {
      position: absolute;
      left: 10%;
      top: 90%;
      width: 20rem;
      height: 20rem;
      content: "";

      background-color: var(--mainGreen);
      box-shadow: 0 0 0 2rem var(--mainYellow);
      border-radius: 50%;
      z-index: -1;
    }

    &:before {
      position: absolute;
      right: 0;
      top: 80%;
      width: 15rem;
      height: 15rem;
      content: "";

      background-color: var(--mainYellow);
      border-radius: 50%;
    }
  }

  & .info {
    grid-area: info;

    &__content {
      height: 100%;
      padding: 1.8rem 2rem;

      background-color: var(--black);
      border-radius: 10px;
      transform: translateX(-10%);

      & p {
        color: #fff;
        font-size: 1.4rem;

        + p {
          margin-top: 0.8rem;
        }
      }

      &:after {
        position: absolute;
        bottom: 0.5rem;
        right: 1.5rem;
        content: "D";

        font-size: 12rem;
        font-weight: 800;
        line-height: 1;

        color: rgba(255, 255, 255, 0.1);
      }

      &:before {
        position: absolute;
        bottom: 0.5rem;
        right: 0.5rem;
        content: "a";

        font-size: 6rem;
        font-weight: 800;
        line-height: 1;

        color: rgba(255, 255, 255, 0.2);
      }
    }
  }

  & .post {
    grid-area: post;

    &__content-wrap {
      gap: 2%;

      > li {
        flex: 1;

        border-radius: 50px 10px 10px 10px;
        background-color: var(--white);
      }
    }
  }
`;
