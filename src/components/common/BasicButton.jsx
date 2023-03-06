import React, { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function BasicButton({ data }) {
  const { link, onClick, text } = data || "";

  return (
    <React.Fragment>
      {link ? (
        <BasicBtn to={link}>{text}</BasicBtn>
      ) : (
        <BasicBtn type="button" onClick={onClick}>
          {text}
        </BasicBtn>
      )}
    </React.Fragment>
  );
}

const Container = styled.header``;
