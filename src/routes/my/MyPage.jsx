import React, { useEffect, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function MyPage() {
  const navigate = useNavigate();
  // const goWhere = () => {
  //   return navigate("/company/registerPost");
  // };

  return (
    <Container>
      <section className="post-section">마이페이지</section>
    </Container>
  );
}

const Container = styled.div`
  & .post-section {
    .post-list-wrap {
    }
    .post-list-wrap li {
    }
  }
`;
