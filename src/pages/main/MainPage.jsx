import React, { useEffect, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Map from "../../components/common/Map";
import PostContent from "../../components/content/PostContent";

// image
import UserImg from "../../assets/images/mock/user.jpg";
import PictureSvg from "../../assets/images/icon/picture.svg";
import HomeSvg from "../../assets/images/icon/home.svg";
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
          {PostData?.filter((item, index) => index < 3).map((list, index) => {
            console.log(list);
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
        <div className="content-wrap"></div>
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
  /* grid-template-rows: minmax(40%, auto); */
  /* grid-template-rows: repeat(auto, 2); */
  grid-template-rows: repeat(2, minmax(40vh, auto));
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
      }
    }

    &.post-article {
      grid-area: post;

      .content-wrap {
        display: flex;
        gap: 3rem;

        > li {
          flex: 1;
          height: 35rem;

          border-radius: 50px 10px 10px 10px;
          background-color: var(--white);
        }
      }
    }

    &.git-article {
      grid-area: git;
    }

    &.area-article {
      grid-area: area;
    }

    .title {
      font-size: 2.4rem;
      font-weight: 600;

      margin-bottom: 1rem;
    }
  }

  /* map */
  .map-area {
    position: relative;
    width: 300px;
    aspect-ratio: 1/1;

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
