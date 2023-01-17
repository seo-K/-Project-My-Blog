import React, { useEffect, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Map from "../../components/common/Map";
import PostContent from "../../components/content/PostContent";

// image
import { PostData } from "../../MockData";

export default function MainPage() {
  const navigate = useNavigate();
  // const goWhere = () => {
  //   return navigate("/company/registerPost");
  // };

  return (
    <Container>
      <section className="dashboard-article">
        <h3 className="title">Dashboard</h3>
        <div className="content-wrap">
          <div className="content">
            <p>Name: SeoYeong kang</p>
            <p>email: dkasid@naver.com</p>
            <p>Name</p>
          </div>
        </div>
      </section>
      <section className="post-article">
        <h3 className="title">Post</h3>
        <ul className="content-wrap">
          {PostData?.filter((item, index) => index < 3).map((list) => {
            return (
              <li key={"postList" + list.id}>
                <PostContent data={list} />
              </li>
            );
          })}
        </ul>
      </section>
      <section className="git-article">
        <h3 className="title">Git Status</h3>
        <div className="content-wrap">
          <div className="git-status-wrap">
            <img src="https://ghchart.rshah.org/00565b/seo-K" alt="git 잔디 이미지" />
          </div>
        </div>
      </section>
      <section className="area-article">
        <h3 className="title">Area</h3>
        <div className="content-wrap map-area">
          <Map />
        </div>
      </section>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  flex: 1;

  display: grid;
  width: 100%;
  gap: 1rem;

  grid-template-columns: repeat(3, 1fr);
  /* grid-auto-rows: minmax(37rem, auto); */
  /* grid-template-rows: auto; */
  /* grid-template-rows: revert; */
  /* grid-template-rows: repeat(2, auto); */
  /* grid-template-rows: repeat(2, minmax(40rem, auto)); */
  grid-template-areas:
    "dashboard post post"
    "git git area";

  section {
    border: 2px solid lightcyan;

    &.dashboard-article {
      grid-area: dashboard;

      .content-wrap {
        position: relative;
        height: 20rem;
      }

      .content {
        position: absolute;
        width: 110%;
        height: 100%;

        right: 0;
        top: 0;
        content: "";

        background-color: var(--black);
        border-radius: 10px;

        padding: 1.8rem 2rem;

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

    &.post-article {
      grid-area: post;

      .content-wrap {
        display: flex;
        gap: 2%;

        > li {
          flex: 1;
          min-height: 35rem;

          border-radius: 50px 10px 10px 10px;
          background-color: var(--white);
        }
      }
    }

    &.git-article {
      grid-area: git;

      background-color: var(--white);
      border-radius: 10px;

      padding: 1.5rem;

      .content-wrap {
        .git-status-wrap {
          width: 100%;
        }
      }
    }

    &.area-article {
      grid-area: area;

      background-color: var(--white);
      border-radius: 10px;

      padding: 1.5rem;

      .content-wrap {
      }
    }

    .title {
      font-size: 2.4rem;
      font-weight: 600;

      margin-bottom: 3rem;
    }
  }

  /* map */
  .map-area {
    position: relative;
    width: 100%;
    /* aspect-ratio: 1/1; */
    height: 20rem;

    margin-top: auto;

    &:after {
      position: absolute;
      top: -0.375rem;
      left: -0.375rem;
      content: "";

      width: 100%;
      height: 100%;
      border-radius: 10px;

      background-color: var(--mainYellow);
    }
  }
`;
