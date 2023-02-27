import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// img
import ImgSvg from "../../assets/images/icon/image.svg";

export default function PostContent({ data }) {
  const { id, postImg, category, title, desc } = data || {};

  return (
    <Container to="/post/0">
      <div className="post">
        {postImg ? (
          <figure>
            <img src={postImg} alt="포스트 이미지" />
          </figure>
        ) : (
          <figure className="empty-img-wrap">
            <img src={ImgSvg} alt="포스트 이미지가 없습니다." />
          </figure>
        )}
        <div>
          <h4 className="post__title">
            &#91;{category}&#93;
            <br />
            {title}
          </h4>
          <p className="post__desc">{desc}</p>
        </div>
      </div>
    </Container>
  );
}

const Container = styled(Link)`
  width: 100%;
  height: 100%;

  padding: 1.5rem 0;

  .post {
    display: flex;

    width: 100%;
    margin: 0 auto;

    figure {
      flex-shrink: 0;
      width: clamp(5rem, 20%, 8rem);
      aspect-ratio: 1 / 1;

      margin-right: 2.2rem;

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
          overflow: hidden;
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
      font-size: 1.5rem;
      font-weight: 500;

      margin-bottom: 1.5rem;

      /* 두줄처리 */
      text-overflow: ellipsis;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2; //텍스트를 몇줄까지 보이게 할 것인가
      -webkit-box-orient: vertical; //콘텐츠의 정렬 방향
      word-wrap: break-word;
    }

    &__desc {
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
// const Container = styled(Link)`
//   display: flex;
//   flex-direction: column;

//   width: 100%;
//   height: 100%;

//   padding: 1.5rem 0;

//   .post {
//     width: 90%;
//     margin: 0 auto;

//     figure {
//       width: 100%;
//       aspect-ratio: 1 / 1;

//       margin-bottom: 1.8rem;

//       &:not(.empty-img-wrap) {
//         position: relative;

//         &:after {
//           position: absolute;
//           top: -0.5rem;
//           left: -0.5rem;

//           content: "";

//           width: 100%;
//           height: 100%;
//           border-radius: 30px 10px 10px 10px;

//           background-color: var(--mainYellow);
//           filter: opacity(0.8);
//         }

//         &:before {
//           position: absolute;
//           bottom: -0.5rem;
//           right: -0.5rem;

//           content: "";

//           width: 100%;
//           height: 100%;
//           border-radius: 30px 10px 10px 10px;

//           background-color: var(--mainGreen);
//         }

//         img {
//           position: relative;

//           border-radius: 30px 10px 10px 10px;
//           overflow: hidden;
//           z-index: 1;
//         }
//       }

//       img {
//         /* position: relative; */
//       }

//       &.empty-img-wrap {
//         display: grid;
//         place-content: center;

//         background-color: var(--gray);
//         border-radius: 30px 10px 10px 10px;

//         img {
//           width: 5rem;
//           height: 5rem;
//         }
//       }
//     }

//     .post-title {
//       font-size: 1.5rem;
//       font-weight: 500;

//       margin-bottom: 0.5rem;

//       /* 두줄처리 */
//       text-overflow: ellipsis;
//       overflow: hidden;
//       display: -webkit-box;
//       -webkit-line-clamp: 2; //텍스트를 몇줄까지 보이게 할 것인가
//       -webkit-box-orient: vertical; //콘텐츠의 정렬 방향
//       word-wrap: break-word;
//     }

//     .desc {
//       /* 두줄처리 */
//       text-overflow: ellipsis;
//       overflow: hidden;
//       display: -webkit-box;
//       -webkit-line-clamp: 2; //텍스트를 몇줄까지 보이게 할 것인가
//       -webkit-box-orient: vertical; //콘텐츠의 정렬 방향
//       word-wrap: break-word;
//     }
//   }

//   .read-more-button {
//     display: flex;
//     justify-content: space-between;
//     width: 100%;

//     padding: 1.2rem 2rem;
//     margin-top: auto;
//     background-color: var(--mainYellow);

//     span {
//       font-size: 1.2rem;
//       font-weight: 600;
//     }

//     .read-more-icon {
//       width: 1.2rem;
//       height: 1.2rem;
//     }
//   }
// `;
