import React, { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";

export default function BasicButton({ data }) {
  const { link, submit, onClick, text } = data || "";

  return (
    <React.Fragment>
      {link ? (
        <BasicLink to={link}>{text}</BasicLink>
      ) : (
        <BasicBtn type={submit ? "submit" : "button"} onClick={onClick}>
          {text}
        </BasicBtn>
      )}
    </React.Fragment>
  );
}

const buttonStyle = css`
  display: inline-block;
  text-align: center;
  font-size: 1.4rem;
  font-weight: 500;
  background-color: var(--mainYellow);
  color: #fff;
  padding: 0.7rem 2rem;
  border-radius: 5rem;

  &:hover {
    background-color: var(--mainGreen);
  }
`;
const BasicBtn = styled.button`
  ${buttonStyle}
`;
const BasicLink = styled(Link)`
  ${buttonStyle}
`;
