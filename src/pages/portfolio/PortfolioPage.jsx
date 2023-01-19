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

// sns icon
import NaverSvg from "../../assets/images/portfolio/sns_naver.svg";
import GithubSvg from "../../assets/images/portfolio/sns_github.svg";
import CodePenSvg from "../../assets/images/portfolio/sns_codepen.svg";

import NoiseBg from "../../assets/images/portfolio/bg_noise.png";
import TextureJpg from "../../assets/images/portfolio/bg_texture.jpg";

// icon
import LogoSvg from "../../assets/images/portfolio/logo.svg";
import SettingSvg from "../../assets/images/portfolio/title_settings.svg";
import LinkSvg from "../../assets/images/portfolio/icon_link.svg";
import LockSvg from "../../assets/images/portfolio/icon_lock.svg";
import StarSvg from "../../assets/images/portfolio/title_star.svg";
import ToolSvg from "../../assets/images/portfolio/title_tool.svg";
import SpotlightSvg from "../../assets/images/portfolio/title_spotlight.svg";
import MsgrSvg from "../../assets/images/portfolio/title_msg.svg";
import ArrowSvg from "../../assets/images/portfolio/icon_arrow.svg";
import InfoSvg from "../../assets/images/portfolio/icon_info.svg";
import HandleSvg from "../../assets/images/portfolio/icon_handle.svg";
import CrankSvg from "../../assets/images/portfolio/icon_crank.svg";
import crank_pathSvg from "../../assets/images/portfolio/icon_crank_path.svg";

// skill icon
import HtmlSvg from "../../assets/images/portfolio/tool_html.svg";
import CssSvg from "../../assets/images/portfolio/tool_css.svg";
import JsSvg from "../../assets/images/portfolio/tool_js.svg";
import ReactSvg from "../../assets/images/portfolio/tool_react.svg";
import ThreeJsSvg from "../../assets/images/portfolio/tool_threejs.svg";

// slider
import VitaSlide from "../../assets/images/portfolio/slide/vita.jpg";
import FoodyitdaSlide from "../../assets/images/portfolio/slide/foodyitda.png";
import VdreamSlide from "../../assets/images/portfolio/slide/vdream.png";
import NpixelSlide from "../../assets/images/portfolio/slide/npixel.png";
import SindoShopSlide from "../../assets/images/portfolio/slide/sindo_shop.png";
import SindoSlide from "../../assets/images/portfolio/slide/sindo.png";
import YoliSlide from "../../assets/images/portfolio/slide/yoli.png";
import KruleSlide from "../../assets/images/portfolio/slide/k_rule.png";
import DuruperSlide from "../../assets/images/portfolio/slide/duruper.png";
import CoolWhiteSlide from "../../assets/images/portfolio/slide/coolwhite.png";

export default function PortfolioPage() {
  const navigate = useNavigate();

  const [isOpen, setOpen] = useState(false);
  const [isNone, setNone] = useState(false);

  //   const toggleComment = (id) => {
  //     setShownComments((prevShownComments) => ({
  //         ...prevShownComments,
  //         [id]: !prevShownComments[id],
  //     }));
  // };

  const OpenEvent = (id) => {
    setOpen((prevOpen) => ({
      ...prevOpen,
      [id]: !prevOpen[id],
    }));

    setTimeout(function () {
      setNone((prevNone) => ({
        ...prevNone,
        [id]: !prevNone[id],
      }));
    }, 2000);
    console.log(id);
  };
  // const OpenEvent = (e) => {
  //   console.log("눌림");
  //   e.preventDefault();
  //   setOpen(true);

  //   setTimeout(function () {
  //     setNone(true);
  //   }, 2000);
  // };

  const snsList = [
    {
      logoImg: NaverSvg,
      link: "https://blog.naver.com/seo-kkk",
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
      link: "https://github.com/seo-K",
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

  const ToolList = [
    {
      img: HtmlSvg,
      text: "Html",
    },
    {
      img: CssSvg,
      text: "Css",
    },
    {
      img: JsSvg,
      text: "Js",
    },
    {
      img: ReactSvg,
      text: "React",
    },
    {
      img: ThreeJsSvg,
      text: "ThreerJs",
    },
  ];

  const portfolioList = [
    {
      projectImg: VitaSlide,
      projectName: "비타알고",
      projectLink: "https://vitaalgo.netlify.app/main.htm",
    },
    {
      projectImg: SindoShopSlide,
      projectName: "신도리코쇼핑몰",
      projectLink: "https://sindo.netlify.app/en/index.html",
    },
    {
      projectImg: SindoSlide,
      projectName: "신도리코랜딩페이지",
      projectLink: "https://sindo-shop.netlify.app/",
    },
    {
      projectImg: FoodyitdaSlide,
      projectName: "푸드잇다",
      projectLink: "https://foodyitda.netlify.app/main.html",
    },
    {
      projectImg: VdreamSlide,
      projectName: "브이드림",
      projectLink: "https://vdream.netlify.app/",
    },
    {
      projectImg: DuruperSlide,
      projectName: "두루퍼",
      projectLink: "https://duruper.com/",
    },
    {
      projectImg: NpixelSlide,
      projectName: "엔픽셀",
    },

    {
      projectImg: YoliSlide,
      projectName: "요일",
    },
    {
      projectImg: KruleSlide,
      projectName: "국룰",
    },
    {
      projectImg: DuruperSlide,
      projectName: "두루퍼",
      projectLink: "https://duruper.com/",
    },
    {
      projectImg: CoolWhiteSlide,
      projectName: "쿨화이트",
    },
  ];

  // SWIPER SETTING
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  function ContentList({ data }) {
    const { logoImg, alt, link, text } = data;

    return (
      <ListContent>
        <div className="circle">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <a href={link} target="_blank">
          <div className="icon-wrap">
            <img src={logoImg} alt={alt} />
          </div>
          {text && <em>{text}</em>}
        </a>
      </ListContent>
    );
  }

  function DoorTrigger(props) {
    // function Modal({글제목변경}){
    return (
      <OpenDoorTrigger
        type="button"
        className={`${isOpen && "opened"} ${isNone && "none"}`}
        onClick={() => OpenEvent(props.id)}
      >
        <div className="left-door"></div>
        <div className="right-door"></div>
        <div className="lock-icon">
          <img src={LockSvg} alt="잠금" />
        </div>
        <p className="close-info">
          <b>CLICK TO OPEN</b>
          <span className="info-icon">
            <img src={InfoSvg} alt="정보" />
          </span>
        </p>
      </OpenDoorTrigger>
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
              <DoorTrigger id={0} />

              <h2 className="blind">sns 리스트</h2>
              <ul className="sns-list-wrap">
                {snsList.map((item, index) => (
                  <ContentList key={index} data={item} />
                ))}
              </ul>
            </section>
            <section className="portfolio">
              <DoorTrigger id={1} />
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
                      <figure className="slide-img-wrap">
                        <img src={list.projectImg} alt={list.projectName} />
                      </figure>
                      {list.projectLink ? (
                        <a href={list.projectLink} className="project-link" target="_blank">
                          <img src={LinkSvg} alt="링크 아이콘" />
                        </a>
                      ) : (
                        <figure className="project-link">
                          <img src={LockSvg} alt="잠금 아이콘" />
                        </figure>
                      )}
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </section>
            <section className="tools">
              <DoorTrigger id={2} />
              <SubTitle>Tool</SubTitle>
              <ul className="tools-list">
                {ToolList.map((list, index) => {
                  return (
                    <li key={"toolList" + index}>
                      <div className="tools-icon">
                        <img src={list.img} alt={list.text} />
                      </div>
                    </li>
                  );
                })}
              </ul>
            </section>
          </div>
          {/* LAST-CONTAINER */}
          <div className="last-container">
            <section className="side-project">
              <SubTitle>SIDE-PROJECTS</SubTitle>
              <ul className="side-project-list-wrap">
                {sideProjectList.map((item, index) => (
                  <ContentList key={index} data={item} />
                ))}
              </ul>
            </section>
            <section className="secret-content">
              <SubTitle>Secret Massage</SubTitle>
              <div className="handel-container"></div>
              <div className="secret-content-text">
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

const OpenLeftDoor = keyframes`
	0% {
		transform: translateX(0%);
	}

	12% {
		transform: translateX(-10.89%);
	}

	24% {
		transform: translateX(-43.56%);
	}

	36% {
		transform: translateX(-98.01%);
	}

	54% {
		transform: translateX(-75.02%);
	}

	74% {
		transform: translateX(-98.37%);
	}

	82% {
		transform: translateX(-93.75%);
	}

	92% {
		transform: translateX(-99.34%);
	}

	96% {
		transform: translateX(-98.46%);
	}

	100% {
		transform: translateX(-100%);
	}

`;
const OpenRightDoor = keyframes`
	0% {
		transform: translateX(0%);
	}

	12% {
		transform: translateX(10.89%);
	}

	24% {
		transform: translateX(43.56%);
	}

	36% {
		transform: translateX(98.01%);
	}

	54% {
		transform: translateX(75.02%);
	}

	74% {
		transform: translateX(98.37%);
	}

	82% {
		transform: translateX(93.75%);
	}

	92% {
		transform: translateX(99.34%);
	}

	96% {
		transform: translateX(98.46%);
	}

	100% {
		transform: translateX(100%);
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
      position: relative;
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

      &:after {
        flex-shrink: 0;
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
            flex-shrink: 0;
            width: 3rem;
            height: 3rem;
            content: "";
            margin-right: 1.5rem;
            background: url(${LogoSvg}) no-repeat center / contain;
          }

          &:after {
            flex-shrink: 0;
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
          /* animation: ${noiseAnimation} 0.5s infinite linear; */
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
                background-color: var(--mainGreen);
              }

              &:checked + .custom-list-toggle .on {
                color: #ffffff80;
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
                  color: #ffffff80;
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
                transition: all 0.5s;

                z-index: 0;
              }
            }

            &-label {
              margin-left: 1rem;
              font-size: 1.8rem;
              font-weight: 600;
              color: #ffffff80;

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
          /* swiper-button-disabled */
          .swiper-button-wrap {
            display: flex;
            align-items: center;

            margin-left: 1rem;

            button {
              width: 5rem;
              height: 5rem;
              opacity: 0.8;

              &.swiper-button-disabled {
                opacity: 0.3;
              }

              &:hover {
                opacity: 1;
              }

              :first-child {
                transform: rotate(180deg);
                margin-right: 1rem;
              }
            }
          }
        }

        &-project-swiper {
          width: 100%;
          height: 50rem;

          background-color: var(--darkBlueGray);
          border-radius: 1rem;
          padding: 2rem 2rem 3.5rem 2rem;
          margin-top: 1rem;

          .swiper-slide {
            overflow: hidden;

            &:hover {
              .slide-img-wrap img {
                transform: scale(1.03);
              }

              .project-link {
                transform: translateX(0);
              }
            }
          }

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
              /* animation: ${noiseAnimation} 0.5s infinite linear; */
              mix-blend-mode: overlay;
            }

            img {
              height: auto;

              transition: all 0.2s;
              transform-origin: top;
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

            img {
              position: absolute;
              top: 50%;
              left: 50%;

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

      .tools {
        flex: 1;

        & h2:before {
          background-image: url(${ToolSvg});
        }

        &-list {
          ${defaultGap}
          display: flex;

          margin-top: 1rem;

          > li {
            display: grid;
            place-content: center;

            padding: 1rem;
            background: var(--dark);
            border-radius: 1rem;

            &:nth-child(odd) {
              margin-top: auto;
            }

            &:nth-child(even) {
              margin-bottom: auto;
            }
          }
        }

        &-icon {
          width: 5rem;
          height: 5rem;
        }
      }
    }

    & .last-container {
      flex: 1;

      h2:before {
        background-image: url(${SpotlightSvg});
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

      .secret-content {
        flex: 1;

        h2:before {
          background-image: url(${MsgrSvg});
        }

        &-text {
        }
      }
    }
  }
`;

const ListContent = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  aspect-ratio: 1/1;
  text-align: center;

  background-color: var(--darkBlueGray);
  border-radius: 1rem;

  padding: 2rem 1rem;

  .circle {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 80%;
    height: 80%;

    transform: translate(-50%, -50%);
    pointer-events: none;

    span {
      position: absolute;
      content: "";
      width: 0.5rem;
      height: 0.5rem;
      border-radius: 50%;

      background: var(--midBlue);
      background-color: #656572;

      &:nth-child(1) {
        top: 0;
        left: 0;
      }
      &:nth-child(2) {
        top: 0;
        right: 0;
      }
      &:nth-child(3) {
        bottom: 0;
        left: 0;
      }
      &:nth-child(4) {
        bottom: 0;
        right: 0;
      }
    }
  }

  & > a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    flex-shrink: 0;

    padding: 2rem;
    aspect-ratio: 1/1;

    border-radius: 50%;
    background: var(--dark);

    box-shadow: 0 1rem 0 var(--black);
    transition: all 0.2s;

    &:has(em) {
      width: 12.5rem;
      height: 12.5rem;
    }

    &:hover,
    &:active,
    &:focus {
      box-shadow: 0 0.2rem 0 var(--black);
      transform: translateY(0.8rem);
    }
  }

  .icon-wrap {
    flex-shrink: 0;
    width: 5rem;
    height: 5rem;

    margin: 0 auto;
  }

  em {
    display: inline-block;
    font-size: 1.5rem;
    font-weight: 600;
    margin-top: 1rem;
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
    flex-shrink: 0;
    width: 3rem;
    height: 3rem;

    margin-right: 1rem;
    content: "";
    background: no-repeat center / contain;
  }
`;

const OpenDoorTrigger = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  display: flex;
  border-radius: 1rem;
  overflow: hidden;

  z-index: 10;

  &.none {
    display: none;
  }

  &.opened {
    .left-door {
      animation: ${OpenLeftDoor} 1s forwards linear;
    }
    .right-door {
      animation: ${OpenRightDoor} 1s forwards linear;
    }

    .lock-icon,
    .close-info {
      display: none;
    }
  }

  &:hover {
    .lock-icon {
      box-shadow: 0 0.2rem 0 var(--black);
      transform: translateY(0.8rem);

      img {
        filter: invert(82%) sepia(100%) saturate(0%) hue-rotate(47deg) brightness(105%)
          contrast(104%);
      }
    }

    .close-info {
      width: 13rem;
    }
  }

  .left-door,
  .right-door {
    flex-shrink: 0;
    width: 50%;
    height: 100%;
    background: repeating-linear-gradient(
      45deg,
      var(--dark),
      var(--dark) 10px,
      #2d2d36 0,
      #2d2d36 12px
    );

    border: 1rem solid var(--dark);
  }

  .left-door {
    position: relative;

    &:after {
      position: absolute;
      top: 0;
      right: -1rem;
      width: 2px;
      height: 100%;
      content: "";
      background: var(--darkBlueGray);
    }
    /* border-left: 1px solid var(--darkBlueGray); */
  }

  .right-door {
    /* transform: translate3d(-100%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg)
        rotateZ(0deg) skew(0deg, 0deg); */
  }

  .lock-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    content: "";

    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    border: 1px solid var(--darkBlueGray);

    background: var(--dark);
    box-shadow: 0 1rem 0 var(--black);
    transition: all 0.2s;
    padding: 0.5rem 1rem;

    margin-top: -2.5rem;
    margin-left: -2.5rem;
  }

  .close-info {
    position: absolute;
    top: 1rem;
    right: 1rem;

    display: flex;
    align-items: center;
    justify-content: flex-end;

    width: 4rem;

    padding: 1rem;
    border-radius: 0.5rem;
    overflow: hidden;

    background-color: var(--dark);
    transition: all 0.2s;

    b {
      color: #ffffff80;
      margin-right: 1rem;
      white-space: nowrap;
    }

    .info-icon {
      flex-shrink: 0;
      width: 2rem;
      height: 2rem;
    }
  }
`;

// https://www.zigae.com/styled-components-abstract/
// https://hymndev.tistory.com/71
// https://hymndev.tistory.com/83
