import React, { useEffect, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import PostContent from "../../components/content/PostContent";
import PostContentSkeleton from "../../components/content/PostContentSkeleton";

// image
import ArrowRightSvg from "../../assets/images/icon/arrow_right.svg";
import TitleBgSvg from "../../assets/images/icon/titlebg.svg";
import HtmlIconSvg from "../../assets/images/icon/tool_html.svg";
import CssIconSvg from "../../assets/images/icon/tool_css.svg";
import JsIconSvg from "../../assets/images/icon/tool_js.svg";
import ReactIconSvg from "../../assets/images/icon/tool_react.svg";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import axios from "axios";

export default function MainPage() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [posts, setPost] = useState([]);
  const blogListData = [
    {
      id: 0,
      title: "HTML 5",
      icon: HtmlIconSvg,
      value: 3,
    },
    {
      id: 1,
      title: "Css",
      icon: CssIconSvg,
      value: 3,
    },
    {
      id: 2,
      title: "Javascript",
      icon: JsIconSvg,
      value: 3,
    },
    {
      id: 3,
      title: "React",
      icon: ReactIconSvg,
      value: 3,
    },
  ];

  useEffect(() => {
    setLoading(true);
    // const url = "https://my.api.mockaroo.com/post.json?key=3c755570";
    const url = "http://localhost:4000/posts";
    axios
      .get(url)
      .then(function (response) {
        setLoading(false);
        setPost(response.data);
      })
      .catch(function (error) {
        console.log("실패");
      });

    console.log(loading);
  }, []);

  return (
    <Container>
      <section className="content-list">
        <div className="content-list__content">
          <hgroup>
            <h3>
              My Blog
              <br />
              Folders
            </h3>
            <p>Learn List</p>
          </hgroup>
          <article className="folder">
            <h3 className="title">Blog List</h3>
            <Swiper
              slidesPerView={"auto"}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="folder__swiper"
              // onSlideChangeTransitionStart={() => {
              //   setSlideActive(true);
              //   console.log(slideActive);
              // }}
              // onSlideChangeTransitionEnd={() => {
              //   setSlideActive(false);
              //   console.log(slideActive);
              // }}
            >
              {blogListData.map((list, index) => {
                return (
                  <SwiperSlide key={list.id}>
                    <a href="#" className="folder__link">
                      <p className="folder__num">{index}</p>
                      <div className="folder__icon">
                        <img src={list.icon} alt="" />
                      </div>
                      <p className="folder__title">{list.title}</p>
                      <i className="folder__count">{list.value} value</i>
                      <div className="folder__shadows">
                        {/* <span></span> */}
                        <span></span>
                      </div>
                    </a>
                  </SwiperSlide>
                );
              })}
              {/* <SwiperSlide>
                <a href="#" className={ slideActive === true ? "folder__link rotate" : 'folder__link'}>
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
              </SwiperSlide> */}
            </Swiper>
          </article>
        </div>
      </section>
      <section className="info">
        <h3 className="title">info</h3>
        <div className="info__content-wrap">
          <div className="info__content">
            <p>Name: ㅇㅇ kang</p>
            <p>email: ㅇㅇ@naver.com</p>
            <p>Name</p>
          </div>
        </div>
      </section>
      <section className="new-post">
        <h3 className="title">New Post</h3>
        <ul className="new-post__content-wrap">
          {loading
            ? new Array(3).fill(1).map((_, i) => {
                return (
                  <li key={i}>
                    <PostContentSkeleton />
                  </li>
                );
              })
            : posts
                .filter((item, index) => index < 3)
                .map((list) => {
                  return (
                    <li key={"postList" + list.id}>
                      <PostContent data={list} />
                    </li>
                  );
                })}
        </ul>
      </section>
      {/* <section className="git-section">
        <h3 className="title">Git Status</h3>
        <div className="content-wrap">
          <div className="git-status-wrap">
            <img src="https://ghchart.rshah.org/00565b/seo-K" alt="git 잔디 이미지" />
          </div>
        </div>
      </section>
      <section className="area-section">
        <h3 className="title">Area</h3>
        <div className="content-wrap map-area">
          <Map />
        </div>
      </section> */}
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
    "content-list content-list"
    "info post";

  &:after {
    position: absolute;
    left: 20%;
    top: 90%;
    width: 15rem;
    height: 15rem;
    content: "";
    background-color: var(--mainYellow);
    box-shadow: 0 0 0 3rem var(--mainGreen);

    border-radius: 50%;
  }

  &:before {
    position: absolute;
    right: 10rem;
    top: 50%;
    width: 15rem;
    height: 15rem;
    content: "";
    background-color: var(--mainGreen);
    box-shadow: 0 0 0 2rem var(--mainYellow);

    border-radius: 50%;
  }

  section {
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
  /* CONTENT LIST (WITH FOLDER) */
  .content-list {
    grid-area: content-list;

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
  /* FOLDER */
  .folder {
    width: 60%;
    flex-shrink: 0;

    &__swiper {
      --swiper-pagination-color: #636c78;
      perspective: 1000;
      padding: 2rem 0 6rem;
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
      position: relative;
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      color: var(--white);
      border-radius: 0 3rem 3rem 3rem;
      padding: 2.5rem 2rem;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
      &:hover {
        transform: translateY(1rem);
      }
    }
    .swiper-slide-active .folder__link {
      transform: rotateY(0);
    }
    &__link:after {
      position: absolute;
      bottom: 100%;
      left: 0;
      width: 7rem;
      height: 1.5rem;
      content: "";
      border-top-left-radius: 1rem;
      background-color: var(--mainYellow);
    }
    &__link:before {
      position: absolute;
      bottom: 100%;
      left: 6.5rem;
      content: "";
      border-bottom: 1.5rem solid var(--mainYellow);
      border-right: 1.5rem solid transparent;
      border-left: 0.75rem solid var(--mainYellow);
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

    &__icon img {
      object-fit: contain;
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
    &__shadows {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      span {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 0 3rem 3rem 3rem;
        background-color: var(--mainYellow);
        transform: rotateY(-10deg);
        transform-origin: left;
        transition: transform 0.5s;
        z-index: -1;
      }
      /* span:nth-child(1) {
        transform: translateY(-2rem) scale(0.98);
        background-color: var(--mainGreen);
      }
      span:nth-child(2) {
        transform: translateY(-4rem) scale(0.95);
        background-color: var(--deepDarkGray);
      } */
    }
  }
  /* INFO */
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
  /* NEW POST */
  .new-post {
    grid-area: post;
    &__content-wrap {
      display: flex;
      gap: 2%;
      > li {
        flex: 1;
      }
    }
  }
`;
