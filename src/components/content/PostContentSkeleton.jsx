import React from "react";
import styled, { css, keyframes } from "styled-components";

export default function PostContentSkeleton() {
  return (
    <Container>
      <div className="skeleton">
        <div className="skeleton__img-wrap"></div>
        <hgroup>
          <p className="skeleton__title" />
          <p className="skeleton__desc" />
        </hgroup>
      </div>
    </Container>
  );
}

const loading = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
       transform: translateX(700%);
  }
`;

const skeletonShadow = css`
  position: relative;
  background-color: #ccc;
  overflow: hidden;
  &:after {
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    width: 5rem;
    height: 100%;
    background: linear-gradient(to right, #ccc, #ddd, #ccc);
    animation: ${loading} 2s infinite linear;
    z-index: 10;
  }
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 1rem 2rem;
  background-color: var(--white);
  border-radius: 0 1rem 1rem 1rem;

  .skeleton {
    &__img-wrap {
      width: 100%;
      height: 20rem;
      border-radius: 3rem 1rem 1rem 1rem;
      margin-bottom: 2rem;
      ${skeletonShadow}
    }
    &__title {
      height: 3rem;
      margin-bottom: 1.5rem;
      ${skeletonShadow}
    }
    &__desc {
      height: 4.5rem;
      ${skeletonShadow}
    }
  }
`;
