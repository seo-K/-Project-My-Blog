import React, { useEffect, useState, useRef } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";

import * as S from "./style";
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

import TextureJpg from "../../assets/images/portfolio/bg_texture.jpg";

// icon
import SettingSvg from "../../assets/images/portfolio/title_settings.svg";
import LinkSvg from "../../assets/images/portfolio/icon_link.svg";
import LockSvg from "../../assets/images/portfolio/icon_lock.svg";
import ArrowSvg from "../../assets/images/portfolio/icon_arrow.svg";
import InfoSvg from "../../assets/images/portfolio/icon_info.svg";
import ScrewSvg from "../../assets/images/portfolio/icon_screw.svg";

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
    console.log(id);
    // newArray[id] = "또다른 글제목";
    // 글제목변경(newArray);

    // setTimeout(function () {
    //   setNone((prevNone) => ({
    //     ...prevNone,
    //     [id]: !prevNone[id],
    //   }));
    // }, 2000);
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
      alt: "Naver Blog",
      text: "Naver Blog",
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
      <S.ListContent>
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
      </S.ListContent>
    );
  }

  function DoorTrigger(props) {
    return (
      <S.OpenDoorTrigger
        type="button"
        className={`${isOpen && "opened"} ${isNone && "none"}`}
        onClick={() => OpenEvent(props.id)}
        aria-pressed={false}
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
      </S.OpenDoorTrigger>
    );
  }

  return (
    <S.Container>
      <div className="skip">
        <ul>
          <li>
            <a href="#main">본문 내용 바로가기</a>
          </li>
          <li>
            <a href="#nav">주메뉴 바로가기</a>
          </li>
        </ul>
      </div>

      <div className="inner">
        <main>
          {/* ASIDE */}
          <aside className="aside">
            <hgroup className="aside__title">
              <h1>PORTFOLIO</h1>
            </hgroup>
            <div className="aside__content">
              <div className="aside__characters-wrap">
                <img src={TextureJpg} alt="배경 텍스춰" />
              </div>
              <div className="aside__slide-wrap">
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
              <article className="aside__custom-wrap">
                <S.SubTitle>Custom List</S.SubTitle>
                <ul className="custom-list">
                  <li className="custom-list__item">
                    <input id="darkMode" type="checkbox" />
                    <label className="custom-list__toggle" htmlFor="darkMode">
                      <span className="on">ON</span>
                      <span className="off">OFF</span>
                    </label>
                    <label className="custom-list__label" htmlFor="darkMode">
                      DARK MODE
                    </label>
                  </li>
                  <li className="custom-list__item">
                    <input id="cursorMode" type="checkbox" />
                    <div className="custom-list__toggle">
                      <span className="on">ON</span>
                      <span className="off">OFF</span>
                    </div>
                    <label className="custom-list__label" htmlFor="cursorMode">
                      CURSOR
                    </label>
                  </li>
                  <li className="custom-list__item">
                    <input id="layoutMode" type="checkbox" />
                    <div className="custom-list__toggle">
                      <span className="on">ON</span>
                      <span className="off">OFF</span>
                    </div>
                    <label className="custom-list__label" htmlFor="layoutMode">
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
              {/* <DoorTrigger id={0} /> */}

              <h2 className="blind">sns 리스트</h2>
              <ul className="sns__list">
                {snsList.map((item, index) => (
                  <ContentList key={index} data={item} />
                ))}
              </ul>
            </section>
            <section className="portfolio">
              <div className="portfolio__title">
                <S.SubTitle>Project</S.SubTitle>
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
                className="portfolio__swiper"
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
              <S.SubTitle>Tool</S.SubTitle>
              <ul className="tools__list">
                {ToolList.map((list, index) => {
                  return (
                    <li key={"toolList" + index}>
                      <div className="tools__icon">
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
              <S.SubTitle>SIDE-PROJECTS</S.SubTitle>
              <ul className="side-project__list">
                {sideProjectList.map((item, index) => (
                  <ContentList key={index} data={item} />
                ))}
              </ul>
            </section>
            <section className="secret-msg">
              <S.SubTitle>Secret Massage</S.SubTitle>
              <ul className="secret-msg__list">
                <li className="secret-msg__item">
                  1. LOCK 작업하기 2. label input 수정하기 3. 시크릿 메세지 수정하기 4. 로딩페이지
                  작업 5. 웹접근성 수정 6. 코드 뼈대만 남고 보이게 작업하기 7. html 수정하기
                </li>
              </ul>

              <div className="secret-msg__trigger">
                <p className="trigger__title">나사를 풀어보세요!</p>
                <div className="trigger__content">
                  <button className="screw" type="button">
                    <img src={ScrewSvg} alt="나사모형" />
                  </button>
                  <button className="screw" type="button">
                    <img src={ScrewSvg} alt="나사모형" />
                  </button>
                  <button className="screw" type="button">
                    <img src={ScrewSvg} alt="나사모형" />
                  </button>
                  <button className="screw" type="button">
                    <img src={ScrewSvg} alt="나사모형" />
                  </button>
                </div>
              </div>
            </section>
          </div>
        </main>
        <footer>
          <p>SEO-YEOUNG PORTFOLIO</p>
        </footer>
      </div>
    </S.Container>
  );
}
