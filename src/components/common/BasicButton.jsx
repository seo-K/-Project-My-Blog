import React, { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";

export default function BasicButton({ data }) {
  const { link, submit, onClick, text, disabled } = data || "";

  return (
    <React.Fragment>
      {link ? (
        <BasicLink to={link}>{text}</BasicLink>
      ) : (
        <BasicBtn type={submit ? "submit" : "button"} onClick={onClick} disabled={disabled}>
          {text}
        </BasicBtn>
      )}
    </React.Fragment>
  );
}

const buttonStyle = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  font-weight: 500;
  background-color: var(--mainYellow);
  color: #fff;
  padding: 1rem 2rem;
  border-radius: 5rem;
  img {
    width: 2.5rem;
    height: 2.5rem;
    margin-right: 1rem;
  }
  &:hover {
    background-color: var(--mainGreen);
  }
  &:disabled {
    background-color: darkgrey;
    color: gray;
  }
`;
const BasicBtn = styled.button`
  ${buttonStyle}
`;
const BasicLink = styled(Link)`
  ${buttonStyle}
`;
