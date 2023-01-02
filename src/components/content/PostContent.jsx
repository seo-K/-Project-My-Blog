import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// img
import ImgIcon from "../../assets/images/icon/image.svg";
import ReadMoreIcon from "../../assets/images/icon/more.svg";

export default function PostContent({ data }) {
  const { postImg, category, title, desc } = data || {};

  return (
    <Container to="/">
      <div className="post-content-wrap">
        {postImg ? (
          <figure>
            <img src={postImg} alt="포스트 이미지" />
          </figure>
        ) : (
          <figure className="empty-img-wrap">
            <img src={ImgIcon} alt="포스트 이미지가 없습니다." />
          </figure>
        )}
        <h4 className="post-title">
          &#91;{category}&#93;
          <br />
          {title}
        </h4>
        <p className="desc">{desc}</p>
      </div>
      {/* <button className="read-more-button">
        <span>Read More</span>
        <span className="read-more-icon">
          <img src={ReadMoreIcon} alt="더보기" />
        </span>
      </button> */}
    </Container>
  );
}

const Container = styled(Link)`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;

  padding: 1.5rem 0;

  .post-content-wrap {
    width: 90%;
    margin: 0 auto;

    figure {
      width: 15rem;
      aspect-ratio: 1 / 1;

      margin-bottom: 1.8rem;

      &:not(.empty-img-wrap) {
        position: relative;

        &:after {
          position: absolute;
          top: -0.5rem;
          left: -0.5rem;

          content: "";

          width: 100%;
          height: 100%;
          border-radius: 50px 10px 10px 10px;

          background-color: var(--mainYellow);
          filter: opacity(0.8);
        }

        &:before {
          position: absolute;
          bottom: -0.5rem;
          right: -0.5rem;

          content: "";

          width: 100%;
          height: 100%;
          border-radius: 50px 10px 10px 10px;

          background-color: var(--mainGreen);
        }

        img {
          position: relative;

          border-radius: 50px 10px 10px 10px;
          overflow: hidden;
          z-index: 1;
        }
      }

      img {
        /* position: relative; */
      }

      &.empty-img-wrap {
        display: grid;
        place-content: center;

        background-color: var(--gray);
        border-radius: 50px 10px 10px 10px;

        img {
          width: 5rem;
          height: 5rem;
        }
      }
    }

    .post-title {
      font-size: 1.5rem;
      font-weight: 500;

      margin-bottom: 0.5rem;

      /* 두줄처리 */
      text-overflow: ellipsis;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2; //텍스트를 몇줄까지 보이게 할 것인가
      -webkit-box-orient: vertical; //콘텐츠의 정렬 방향
      word-wrap: break-word;
    }

    .desc {
      margin-bottom: 4rem;

      /* 두줄처리 */
      text-overflow: ellipsis;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2; //텍스트를 몇줄까지 보이게 할 것인가
      -webkit-box-orient: vertical; //콘텐츠의 정렬 방향
      word-wrap: break-word;
    }
  }

  .read-more-button {
    display: flex;
    justify-content: space-between;
    width: 100%;

    padding: 1.2rem 2rem;
    margin-top: auto;
    background-color: var(--mainYellow);

    span {
      font-size: 1.2rem;
      font-weight: 600;
    }

    .read-more-icon {
      width: 1.2rem;
      height: 1.2rem;
    }
  }
`;
