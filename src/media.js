import { css } from "styled-components";

// eslint-disable-next-line quotes
// const fonts = { mono: "'Menlo', monospace" }

const breakPoints = {
  mobile: "375",
  tablet: "768",
  desktop: "1024",
};

export default Object.keys(breakPoints).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
    @media screen and (max-width: ${breakPoints[label]}px) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {});
