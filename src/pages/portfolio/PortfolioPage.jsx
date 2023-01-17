import React, { useEffect, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

// image
import NaverSvg from "../../assets/images/portfolio/naver.svg";
import GithubSvg from "../../assets/images/portfolio/github.svg";
import CodePenSvg from "../../assets/images/portfolio/codepen.svg";

export default function PortfolioPage() {
  const navigate = useNavigate();

  return (
    <Container>
      <div className="inner">
        <main>
          <aside className="top-container">
            <hgroup>
              <h1>SEO-YEONG PORTFOLIO</h1>
            </hgroup>
            <div className="characters-wrap"></div>
            <div className="contact-wrap"></div>
            <article className="custom-wrap">
              <h2>Custom List</h2>
              <ul>
                <li>
                  <div className="toggle-wrap">
                    <input id="darkMode" type="checkbox" />
                    <label htmlFor="darkMode">
                      <div className="on">ON</div>
                      <div className="on">OFF</div>
                    </label>
                  </div>
                  <button type="button">DARK MODE</button>
                </li>
                <li>
                  <div className="toggle-wrap">
                    <input id="cursorMode" type="checkbox" />
                    <label htmlFor="cursorMode">
                      <div className="on">ON</div>
                      <div className="on">OFF</div>
                    </label>
                  </div>
                  <button type="button">CURSOR</button>
                </li>
                <li>
                  <div className="toggle-wrap">
                    <input id="layoutMode" type="checkbox" />
                    <label htmlFor="layoutMode">
                      <div className="on">ON</div>
                      <div className="on">OFF</div>
                    </label>
                  </div>
                  <button type="button">CHANGE LAYOUT</button>
                </li>
              </ul>
            </article>
          </aside>
          <div className="mid-container">
            <section className="sns-section">
              <h2 className="blind">sns 리스트</h2>
              <ul className="sns-list">
                <li className="dot-bg">
                  <a href="#">
                    <div className="sns-icon-wrap">
                      <img src={NaverSvg} alt="네이버" />
                    </div>
                    <em>네이버</em>
                  </a>
                </li>
                <li className="dot-bg">
                  <a href="#">
                    <div className="sns-icon-wrap">
                      <img src={GithubSvg} alt="깃허브" />
                    </div>
                    <em>blog</em>
                  </a>
                </li>
                <li className="dot-bg">
                  <a href="#">
                    <div className="sns-icon-wrap">
                      <img src={CodePenSvg} alt="코드펜" />
                    </div>
                    <em>codepen</em>
                  </a>
                </li>
              </ul>
            </section>
            <section className="portfolio-section">
              <div className="top-title">
                <h2>PORTFOLIO</h2>
              </div>
              <div className="swiper-container"></div>
            </section>
            <section className="util-section">
              <h2 className="blind">자잘한거</h2>
              <div className="color dot-bg"></div>
              <div className="career dot-bg"></div>
            </section>
          </div>
          <div className="last-container">
            <section className="side-project-section">
              <h2>SIDE-PROJECTS</h2>
              <ul>
                <li className=" dot-bg">
                  <a href="#">웹접근성</a>
                </li>
                <li className=" dot-bg">
                  <a href="#">blog</a>
                </li>
                <li className=" dot-bg">
                  <a href="#">three.js</a>
                </li>
                <li className=" dot-bg">
                  <a href="#">three.js</a>
                </li>
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

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  width: 100%;
  height: 100vh;
  background-color: var(--white);
  background-image: radial-gradient(circle at center, var(--beige) 0.4rem, transparent 0),
    radial-gradient(circle at center, var(--beige) 0.4rem, transparent 0);
  background-size: 2rem 2rem;
  background-position: 0 0, 0.5rem 0.5rem;

  & .inner {
    width: clamp(32rem, 90%, 184rem);
  }

  & main {
    display: flex;

    .dot-bg {
    }

    .top-container {
      flex-shrink: 0;
      width: 35%;

      background-color: var(--mainYellow);
      border-radius: 1rem;
    }

    .mid-container {
      flex: 1;

      border: 5px solid bisque;
      border-radius: 1rem;

      .sns-section {
        background-color: #dadad0;
        padding: 1.5rem;

        .sns-list {
          display: flex;
          gap: 1rem;

          > li {
            flex: 1;

            background-color: #e3e3da;
            border-radius: 1rem;

            .sns-icon-wrap {
              width: 6rem;
              height: 6rem;
            }
          }
        }
      }
    }

    .last-container {
      flex-shrink: 0;
      width: 30%;

      border: 5px solid saddlebrown;
      border-radius: 1rem;
    }
  }
`;
