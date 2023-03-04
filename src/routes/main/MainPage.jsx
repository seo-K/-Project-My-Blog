import React, { useEffect, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import PostContent from "../../components/content/PostContent";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

// image
import { PostData } from "../../MockData";
import ArrowRightSvg from "../../assets/images/icon/arrow_right.svg";
import TitleBgSvg from "../../assets/images/icon/titlebg.svg";

export default function MainPage() {
  const navigate = useNavigate();

  return (
    <Container>
      <article className="background">
        <div className="background__content">
          <hgroup>
            <h3>
              My Blog
              <br />
              Folders
            </h3>
            <p>Learn List</p>
          </hgroup>
          <div className="folder">
            <p className="title">Blog List</p>
            <Swiper
              slidesPerView={"auto"}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="folder__swiper"
            >
              <SwiperSlide>
                <a href="#" className="folder__link">
                  <p className="folder__num">01</p>
                  <div className="folder__icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#fff"
                      width="100%"
                      height="100%"
                      viewBox="0 0 32 32"
                      version="1.1"
                    >
                      <title>html5</title>
                      <path d="M11.677 13.196l-0.289-3.387 12.536 0.004 0.287-3.268-16.421-0.004 0.87 9.983h11.374l-0.406 4.27-3.627 1.002-3.683-1.009-0.234-2.63h-3.252l0.411 5.198 6.757 1.807 6.704-1.798 0.927-10.166h-11.954zM2.914 1.045h26.172l-2.38 26.874-10.734 3.037-10.673-3.038z" />
                    </svg>
                  </div>
                  <p className="folder__title">HTML</p>
                  <i className="folder__count">3 value</i>
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a href="#" className="folder__link">
                  <p className="folder__num">01</p>
                  <div className="folder__icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#fff"
                      width="100%"
                      height="100%"
                      viewBox="0 0 32 32"
                      version="1.1"
                    >
                      <title>html5</title>
                      <path d="M11.677 13.196l-0.289-3.387 12.536 0.004 0.287-3.268-16.421-0.004 0.87 9.983h11.374l-0.406 4.27-3.627 1.002-3.683-1.009-0.234-2.63h-3.252l0.411 5.198 6.757 1.807 6.704-1.798 0.927-10.166h-11.954zM2.914 1.045h26.172l-2.38 26.874-10.734 3.037-10.673-3.038z" />
                    </svg>
                  </div>
                  <p className="folder__title">HTML</p>
                  <i className="folder__count">3 value</i>
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a href="#" className="folder__link">
                  <p className="folder__num">01</p>
                  <div className="folder__icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#fff"
                      width="100%"
                      height="100%"
                      viewBox="0 0 32 32"
                      version="1.1"
                    >
                      <title>html5</title>
                      <path d="M11.677 13.196l-0.289-3.387 12.536 0.004 0.287-3.268-16.421-0.004 0.87 9.983h11.374l-0.406 4.27-3.627 1.002-3.683-1.009-0.234-2.63h-3.252l0.411 5.198 6.757 1.807 6.704-1.798 0.927-10.166h-11.954zM2.914 1.045h26.172l-2.38 26.874-10.734 3.037-10.673-3.038z" />
                    </svg>
                  </div>
                  <p className="folder__title">HTML</p>
                  <i className="folder__count">3 value</i>
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a href="#" className="folder__link">
                  <p className="folder__num">01</p>
                  <div className="folder__icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#fff"
                      width="100%"
                      height="100%"
                      viewBox="0 0 32 32"
                      version="1.1"
                    >
                      <title>html5</title>
                      <path d="M11.677 13.196l-0.289-3.387 12.536 0.004 0.287-3.268-16.421-0.004 0.87 9.983h11.374l-0.406 4.27-3.627 1.002-3.683-1.009-0.234-2.63h-3.252l0.411 5.198 6.757 1.807 6.704-1.798 0.927-10.166h-11.954zM2.914 1.045h26.172l-2.38 26.874-10.734 3.037-10.673-3.038z" />
                    </svg>
                  </div>
                  <p className="folder__title">HTML</p>
                  <i className="folder__count">3 value</i>
                </a>
              </SwiperSlide>
            </Swiper>
          </div>
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
        <h3 className="title">New Post</h3>
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

    .title {
      font-size: 2.4rem;
      font-weight: 700;

      margin-bottom: 3rem;
    }
  }

  .background {
    grid-area: background;

    /* &:after {
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
    } */

    &__content {
      display: flex;

      hgroup {
        position: relative;
        width: 40%;
        flex-shrink: 0;

        h3 {
          font-size: 3rem;
          line-height: 1.6;
          font-weight: 800;
          margin-bottom: 5rem;
        }

        p {
          font-size: 1.5rem;
          margin-bottom: 8rem;
        }

        &:after {
          display: block;
          background: url(${TitleBgSvg}) no-repeat center / contain;
          content: "";
          width: 20rem;
          height: 20rem;

          margin-left: auto;
        }
      }
    }
  }

  .folder {
    width: 60%;
    flex-shrink: 0;

    &__swiper {
      --swiper-pagination-color: #636c78;
      padding-bottom: 6rem;

      .swiper-slide {
        flex-shrink: 0;
        width: 18rem;
        height: 25rem;
      }

      .swiper-pagination {
        bottom: 0;
      }
    }

    &__link {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;

      background-color: var(--mainYellow);
      color: var(--white);
      border-radius: 3rem;

      padding: 2.5rem 2rem;
    }

    &__num {
      position: relative;
      font-size: 1.6rem;

      &:after {
        position: absolute;
        top: 0;
        right: 0;
        content: "";
        background: url(${ArrowRightSvg}) no-repeat center center / contain;
        color: #fff;

        width: 2rem;
        height: 2rem;
      }
    }

    &__icon {
      width: 6rem;
      height: 5rem;
      margin-bottom: 2rem;

      margin-top: auto;
    }

    &__title {
      font-size: 2rem;
      font-weight: 600;
    }

    &__count {
      font-size: 1.4rem;
      font-weight: 100;
      margin-top: 1rem;
    }
  }

  .info {
    grid-area: info;

    &__content {
      height: 100%;
      padding: 1.8rem 2rem;

      background-color: var(--black);
      border-radius: 10px;
      transform: translateX(-10%);

      p {
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
      }
      > li + li {
        margin-top: 1.5rem;
      }
    }
  }
`;
