import React, { useEffect, useState, useRef } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import styled, { keyframes, css } from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/lazy";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Lazy, Pagination, Navigation } from "swiper";

// image
import NaverSvg from "../../assets/images/portfolio/naver.svg";
import GithubSvg from "../../assets/images/portfolio/github.svg";
import CodePenSvg from "../../assets/images/portfolio/codepen.svg";

import NoiseBg from "../../assets/images/portfolio/noise_bg.png";
import TextureJpg from "../../assets/images/portfolio/texture_bg.jpg";

// icon
import LogoSvg from "../../assets/images/portfolio/logo.svg";
import ArrowSvg from "../../assets/images/portfolio/icon_arrow.svg";
import LinkSvg from "../../assets/images/portfolio/link.svg";
import StarSvg from "../../assets/images/portfolio/star.svg";
import MsgrSvg from "../../assets/images/portfolio/msg.svg";
import SettingSvg from "../../assets/images/portfolio/settings.svg";

// slider
import CoolWhiteSlide from "../../assets/images/portfolio/slide/coolwhite.png";
import DuruperSlide from "../../assets/images/portfolio/slide/duruper.png";
import FoodyitdaSlide from "../../assets/images/portfolio/slide/foodyitda.png";
import KruleSlide from "../../assets/images/portfolio/slide/k_rule.png";
import NpixelSlide from "../../assets/images/portfolio/slide/npixel.png";
import SindoSlide from "../../assets/images/portfolio/slide/sindo.png";
import SindoShopSlide from "../../assets/images/portfolio/slide/sindo_shop.png";
import VdreamSlide from "../../assets/images/portfolio/slide/vdream.png";
import VitaSlide from "../../assets/images/portfolio/slide/vita.jpg";
import YoliSlide from "../../assets/images/portfolio/slide/yoli.png";

export default function PortfolioPage() {
  const navigate = useNavigate();

  const snsList = [
    {
      logoImg: NaverSvg,
      link: "/",
      alt: "네이버 블로그",
      text: "네이버 블로그",
    },
    {
      logoImg: GithubSvg,
      link: "/",
      alt: "Git hub",
      text: "Git hub",
    },
    {
      logoImg: CodePenSvg,
      link: "/",
      alt: "CodePen",
      text: "CodePen",
    },
  ];

  const sideProjectList = [
    {
      logoImg: NaverSvg,
      link: "/",
      alt: "웹접근성",
    },
    {
      logoImg: GithubSvg,
      link: "/",
      alt: "blog",
    },
    {
      logoImg: CodePenSvg,
      link: "/",
      alt: "Three.js",
    },
    {
      logoImg: CodePenSvg,
      link: "/",
      alt: "뭐뭐",
    },
  ];

  const portfolioList = [
    CoolWhiteSlide,
    DuruperSlide,
    FoodyitdaSlide,
    KruleSlide,
    NpixelSlide,
    SindoSlide,
    SindoShopSlide,
    VdreamSlide,
    VitaSlide,
    YoliSlide,
  ];

  // SWIPER SETTING
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  function List({ data }) {
    const { logoImg, alt, link, text } = data;

    return (
      <ListContent>
        <Link to={link}>
          <div className="sns-icon-wrap">
            <img src={logoImg} alt={alt} />
          </div>
          {text && <em>{text}</em>}
        </Link>
      </ListContent>
    );
  }

  return (
    <Container>
      <div className="inner">
        <main>
          {/* ASIDE */}
          <aside className="aside">
            <hgroup className="aside-title">
              <h1>PORTFOLIO</h1>
            </hgroup>
            <div className="aside-content">
              <div className="aside-characters-wrap">
                <img src={TextureJpg} alt="배경 텍스춰" />
              </div>
              <div className="aside-slide-wrap">
                <input
                  type="range"
                  className="slide-to-contact"
                  id="slide"
                  name="slide"
                  min="0"
                  max="1"
                  step="1"
                />
                <output name="x" htmlFor="slide">
                  CONTACT ME
                </output>
              </div>
              <article className="aside-custom-wrap">
                <SubTitle>Custom List</SubTitle>
                <ul className="custom">
                  <li className="custom-list">
                    <input id="darkMode" type="checkbox" />
                    <label className="custom-list-toggle" htmlFor="darkMode">
                      <span className="on">ON</span>
                      <span className="off">OFF</span>
                    </label>
                    <label className="custom-list-label" htmlFor="darkMode">
                      DARK MODE
                    </label>
                  </li>
                  <li className="custom-list">
                    <input id="cursorMode" type="checkbox" />
                    <div className="custom-list-toggle">
                      <span className="on">ON</span>
                      <span className="off">OFF</span>
                    </div>
                    <label className="custom-list-label" htmlFor="cursorMode">
                      CURSOR
                    </label>
                  </li>
                  <li className="custom-list">
                    <input id="layoutMode" type="checkbox" />
                    <div className="custom-list-toggle">
                      <span className="on">ON</span>
                      <span className="off">OFF</span>
                    </div>
                    <label className="custom-list-label" htmlFor="layoutMode">
                      CHANGE LAYOUT
                    </label>
                  </li>
                </ul>
              </article>
            </div>
          </aside>
          {/* MID-CONTAINER */}
          <div className="mid-container">
            <section className="sns">
              <h2 className="blind">sns 리스트</h2>
              <ul className="sns-list-wrap">
                {snsList.map((item, index) => (
                  <List key={index} data={item} />
                ))}
              </ul>
            </section>
            <section className="portfolio">
              <div className="portfolio-top-title">
                <SubTitle>Project</SubTitle>
                <div className="swiper-button-wrap">
                  <button type="button" ref={navigationPrevRef}>
                    <img src={ArrowSvg} alt="이전 슬라이드 보기" />
                  </button>
                  <button type="button" ref={navigationNextRef}>
                    <img src={ArrowSvg} alt="다음 슬라이드 보기" />
                  </button>
                </div>
              </div>
              <Swiper
                className="portfolio-project-swiper"
                modules={[Lazy, Pagination, Navigation]}
                lazy={true}
                pagination={{
                  type: "fraction",
                }}
                spaceBetween={30}
                navigation={{
                  prevEl: navigationPrevRef.current,
                  nextEl: navigationNextRef.current,
                }}
                onInit={(swiper) => {
                  swiper.params.navigation.prevEl = navigationPrevRef.current;
                  swiper.params.navigation.nextEl = navigationNextRef.current;
                  swiper.navigation.init();
                  swiper.navigation.update();
                }}
              >
                {portfolioList.map((list, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <div className="slide-img-wrap">
                        <img src={list} alt="" />
                      </div>
                      <Link to="/" className="project-link"></Link>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </section>
            <section className="util">
              <h2 className="blind">자잘한거</h2>
              <div className="color dot-bg"></div>
              <div className="career dot-bg"></div>
            </section>
          </div>
          {/* LAST-CONTAINER */}
          <div className="last-container">
            <section className="side-project-section">
              <SubTitle>SIDE-PROJECTS</SubTitle>
              <ul className="side-project-list-wrap">
                {sideProjectList.map((item, index) => (
                  <List key={index} data={item} />
                ))}
              </ul>
            </section>
            <section className="secret-section">
              <h2>비밀 메세지</h2>
              <div className="handel-container"></div>
              <div className="secret-text">
                <p>비밀메세지</p>
              </div>
            </section>
          </div>
        </main>
        <footer>footer</footer>
      </div>
    </Container>
  );
}

const backgroundAnimation = keyframes`
to {
    background-position-x: 100vw;
  }
`;

const noiseAnimation = keyframes`
  0%, 100%{background-position: 0 0;}
  10%{background-position: -35% -40%;}
  20%{background-position: -45% 35%;}
  30%{background-position: 37% -55%;}
  40%{background-position: 50% 55%;}
  50%{background-position: -55% 40%;}
  60%{background-position: 45% 35%;}
  70%{background-position: -30% 45%;}
  80%{background-position: 45% 55%;}
  90%{background-position: -40% 40%;}
`;

const defaultGap = css`
  gap: 1rem;
`;

const Container = styled.div`
  ${defaultGap}
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100vh;

  /* animation: ${backgroundAnimation} 5s infinite linear; */
  background-color: var(--darkBlueGray);
  background: linear-gradient(90deg, var(--darkBlue) 19px, transparent 1%) center,
    linear-gradient(var(--darkBlue) 19px, transparent 1%) center, var(--midBlue);
  background-size: 22px 22px;
  /* background-image: radial-gradient(circle at center, #2a2a33 0.4rem, transparent 0),
    radial-gradient(circle at center, #212125 0.4rem, transparent 0);
  background-size: 2rem 2rem;
  background-position: 0 0, 0.5rem 0.5rem; */

  & .inner {
    width: clamp(32rem, 90%, 184rem);
  }

  & main {
    ${defaultGap}
    display: flex;

    & > * {
      border-radius: 1rem;

      &:not(.aside) {
        ${defaultGap}
        display: flex;
        flex-direction: column;
        flex-shrink: 0;
      }
    }

    & section {
      background-color: var(--dark);
      padding: 1.5rem;
      color: #656572;

      border-radius: 1rem;
      border: 1px solid var(--dark);
      box-shadow: 0 0 10px #161616;

      &:hover {
        border: 1px solid hsla(0, 0%, 76.9%, 0.7);
        background-color: #2b2b36;
      }
    }

    & .aside {
      position: relative;
      flex-shrink: 0;
      width: 35%;

      background-color: var(--mainYellow);
      padding-bottom: 5rem;

      /* mask-image: linear-gradient(rgba(0, 0, 0, 1), transparent); */

      &:after {
        position: absolute;
        bottom: 0;
        left: 50%;
        content: "";
        width: 80%;
        height: 4rem;

        background-color: var(--darkBlue);
        border-radius: 1rem 1rem 0 0;

        transform: translateX(-50%);
      }

      &-title {
        border-bottom: 4px solid var(--darkBlue);
        color: var(--darkBlue);
        padding: 1.5rem 3rem;

        h1 {
          display: flex;
          align-items: center;

          font-size: 2rem;
          font-weight: 600;

          &:before {
            width: 3rem;
            height: 3rem;
            content: "";
            margin-right: 1.5rem;
            background: url(${LogoSvg}) no-repeat center / contain;
          }

          &:after {
            content: "";
            width: 10rem;
            height: 4rem;
            background-image: radial-gradient(
              circle at center,
              var(--mainGreen) 0.4rem,
              transparent 0
            );
            opacity: 0.3;
            background-size: 2rem 2rem;
            background-position: 0 0, 0.5rem 0.5rem;

            margin-left: auto;
          }
        }
      }

      &-content {
        padding: 1.5rem 3rem;

        & > * + * {
          margin-top: 2rem;
          border-radius: 1rem;
        }
      }

      &-characters-wrap {
        position: relative;
        width: 100%;
        height: 30rem;

        overflow: hidden;

        &:after,
        &:before {
          position: absolute;
          top: 0;
          left: 0;

          width: 100%;
          height: 100%;
          content: "";
          box-sizing: border-box;
          z-index: 5;
        }

        &:after {
          background: url(${NoiseBg});
          animation: ${noiseAnimation} 0.5s infinite linear;
          opacity: 0.67;
          mix-blend-mode: overlay;
        }
      }

      &-slide-wrap {
        background: var(--darkBlue);
        padding: 1rem 1.5rem;

        input[type="range"] {
          -webkit-appearance: none;
          width: 100%;
          height: 5rem;
          background: repeating-linear-gradient(
            60deg,
            var(--darkBlue),
            var(--darkBlue) 15px,
            var(--midBlue) 0,
            var(--midBlue) 30px
          );

          background-position-x: 0;
          /* animation: ${backgroundAnimation} 18s infinite linear; */

          cursor: pointer;
          border-radius: 1rem;
          transition: background 450ms ease-in;

          &:focus {
            outline: none;
          }

          ::-webkit-slider-thumb {
            position: relative;
            -webkit-appearance: none;
            width: 10rem;
            height: 5rem;
            background: var(--mainYellow);
            border-radius: 1rem;
            cursor: pointer;

            box-shadow: 1px 5px 1px #73781e;
          }

          ::-moz-range-thumb {
            -webkit-appearance: none;
            width: 10rem;
            height: 4rem;
            background: var(--mainYellow);
            cursor: pointer;
          }
        }
      }

      &-custom-wrap {
        background: var(--darkBlue);
        padding: 0 1.5rem 2rem;

        > h2 {
          background: transparent;

          &:before {
            background-image: url(${SettingSvg});
          }
        }

        .custom {
          &-list {
            display: flex;
            align-items: center;
            background-color: var(--midBlue);
            padding: 1rem;

            border-radius: 1rem;

            & + li {
              margin-top: 1rem;
            }

            input {
              display: none;

              &:checked + .custom-list-toggle:after {
                transform: translate(5rem, -50%);
              }

              &:checked + .custom-list-toggle .on {
                color: #ffffff71;
              }

              &:checked + .custom-list-toggle .off {
                color: #000;
              }
            }

            &-toggle {
              position: relative;
              display: flex;
              align-items: center;

              background: var(--darkBlue);
              border-radius: 10rem;

              border: 10px solid var(--darkBlue);

              & > span {
                position: relative;
                width: 4rem;

                font-size: 1.5rem;
                text-align: center;
                font-weight: 600;

                padding: 1rem 0;
                transform: color 0.5s;

                z-index: 1;

                &.on {
                  color: #000;
                }

                &.off {
                  color: #ffffff71;
                }

                & + span {
                  margin-left: 1rem;
                }
              }

              &:after {
                position: absolute;
                top: 50%;
                left: 0;
                content: "";

                width: 4rem;
                height: 100%;

                border-radius: 50rem;
                background-color: var(--mainYellow);

                transform: translateY(-50%);
                transition: transform 0.5s;

                z-index: 0;
              }
            }

            &-label {
              margin-left: 1rem;
              font-size: 1.8rem;
              font-weight: 600;
              color: #ffffff71;

              cursor: pointer;
            }
          }
        }
      }
    }

    & .mid-container {
      width: 40%;

      .sns {
        &-list-wrap {
          ${defaultGap}
          display: flex;

          > li {
            flex: 1;
          }
        }
      }

      .portfolio {
        &-top-title {
          display: flex;

          h2 {
            &:before {
              background-image: url(${StarSvg});
            }
          }

          .swiper-button-wrap {
            display: flex;
            align-items: center;

            margin-left: 1rem;

            button {
              width: 5rem;
              height: 5rem;

              &:first-child {
                transform: rotate(180deg);
                margin-right: 1rem;
              }
            }
          }
        }

        &-project-swiper {
          width: 100%;
          height: 32rem;

          background-color: var(--darkBlueGray);
          border-radius: 1rem;
          padding: 2rem 2rem 3.5rem 2rem;
          margin-top: 1rem;

          .slide-img-wrap {
            height: 100%;

            background-color: #fff;
            overflow: hidden;

            &:after {
              position: absolute;
              top: 0;
              left: 0;

              width: 100%;
              height: 100%;
              content: "";
              background: url(${NoiseBg});
              animation: ${noiseAnimation} 0.5s infinite linear;
              mix-blend-mode: overlay;
            }

            img {
              height: auto;

              transition: all 0.2s;
              transform-origin: top;
            }

            &:hover img {
              transform: scale(1.03);
            }

            &:hover ~ .project-link {
              transform: translateX(0);
            }
          }

          .project-link {
            position: absolute;
            bottom: 3rem;
            right: 0;
            content: "";

            width: 6rem;
            height: 6rem;
            border-radius: 2rem 0 0 2rem;
            background: var(--darkBlueGray);
            box-shadow: 0 0 5px var(--darkBlueGray);

            transform: translateX(100%);
            transition: all 0.4s;

            &:after {
              position: absolute;
              top: 50%;
              left: 50%;
              content: "";
              background: url(${LinkSvg}) no-repeat center / contain;

              width: 4rem;
              height: 4rem;

              transform: translate(-50%, -50%);
            }

            &:hover {
            }
          }
          /* 
          .swiper-slide-active .project-link {
            transform: translateY(0);
          } */

          .swiper-pagination {
            font-size: 1.3rem;
          }
        }
      }

      .util {
        flex: 1;
      }
    }

    & .last-container {
      flex: 1;

      h2 {
        &:before {
          background-image: url(${MsgrSvg});
        }
      }

      .side-project-list-wrap {
        ${defaultGap}
        display: flex;
        flex-wrap: wrap;

        margin-top: 1rem;

        > li {
          flex-shrink: 0;
          width: calc(50% - 0.5rem);
        }
      }

      .secret-section {
        flex: 1;
      }
    }
  }
`;

const ListContent = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;

  aspect-ratio: 1/1;
  text-align: center;

  background-color: var(--darkBlueGray);
  border-radius: 1rem;

  padding: 2rem 1rem;

  .sns-icon-wrap {
    width: 6rem;
    height: 6rem;

    margin: 0 auto;
  }

  em {
    display: inline-block;
    font-size: 1.5rem;
    font-weight: 600;
    margin-top: 1.5rem;
  }
`;

const SubTitle = styled.h2`
  display: flex;
  align-items: center;
  flex: 1;

  font-size: 1.8rem;
  font-weight: 600;
  color: #ffffff80;
  padding: 2rem 3rem;

  border-radius: 1rem;
  background: var(--darkBlueGray);

  &:after {
    flex-shrink: 0;
    content: "";
    width: 6rem;
    height: 4rem;
    background-image: radial-gradient(circle at center, #656572 0.4rem, transparent 0);
    opacity: 0.3;
    background-size: 2rem 2rem;
    background-position: 0 0, 0.5rem 0.5rem;

    margin-left: auto;
  }

  &:before {
    width: 3rem;
    height: 3rem;

    margin-right: 1rem;
    content: "";
    background: no-repeat center / contain;
  }
`;

// https://www.zigae.com/styled-components-abstract/
// https://hymndev.tistory.com/71
// https://hymndev.tistory.com/83
