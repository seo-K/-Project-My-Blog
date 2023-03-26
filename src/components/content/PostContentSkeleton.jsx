import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// img
import ImgSvg from "../../assets/images/icon/image.svg";

export default function PostContent({ data }) {
  const { id, postImg, category, title, desc } = data || {};

  return (
    <Container to={`/post/detail/${id}`}>
      <div className="post-content">
        {postImg ? (
          <figure>
            <img src={postImg} alt="포스트 이미지" />
          </figure>
        ) : (
          <figure className="empty-img-wrap">
            <img src={ImgSvg} alt="포스트 이미지가 없습니다." />
          </figure>
        )}
        <hgroup>
          <h4 className="post-content__title">
            &#91;{category}&#93;
            <br />
            {title}
          </h4>
          <p className="post-content__desc">{desc}</p>
        </hgroup>
      </div>
    </Container>
  );
}

const Container = styled(Link)`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 1rem 2rem;
  background-color: var(--white);
  border-radius: 0 1rem 1rem 1rem;
  :after {
    position: absolute;
    bottom: 100%;
    left: 0;
    width: 7rem;
    height: 1.5rem;
    content: "";
    border-top-left-radius: 1rem;
    background-color: var(--white);
  }
  :before {
    position: absolute;
    bottom: 100%;
    left: 6.5rem;
    content: "";
    border-bottom: 1.5rem solid var(--white);
    border-right: 1.5rem solid transparent;
    border-left: 0.75rem solid var(--white);
  }

  .post-content {
    display: flex;
    flex-direction: column;
    padding: 1rem 0;
    width: 100%;
    margin: 0 auto;

    figure {
      width: 100%;
      height: 20rem;
      margin-bottom: 2rem;

      &:not(.empty-img-wrap) {
        position: relative;
        &:after {
          position: absolute;
          top: -0.5rem;
          left: -0.5rem;
          content: "";
          width: 100%;
          height: 100%;
          border-radius: 3rem 1rem 1rem 1rem;
          box-shadow: 1rem 1rem 0 var(--mainGreen);
          background-color: var(--mainYellow);
          filter: opacity(0.8);
        }
        img {
          position: relative;
          border-radius: 3rem 1rem 1rem 1rem;
          z-index: 1;
        }
      }
      &.empty-img-wrap {
        display: grid;
        place-content: center;
        background-color: rgba(255, 255, 255, 0.1);
        border-radius: 3rem 1rem 1rem 1rem;
        img {
          width: 5rem;
          height: 5rem;
        }
      }
    }
    &__title {
      font-size: 2rem;
      font-weight: 500;
      margin-bottom: 1.5rem;
      /* 두줄처리 */
      text-overflow: ellipsis;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      word-wrap: break-word;
    }
    &__desc {
      /* 두줄처리 */
      text-overflow: ellipsis;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
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
