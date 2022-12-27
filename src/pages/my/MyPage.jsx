import React, { useEffect, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

// image
import UserImg from "../../assets/images/mock/user.jpg";
import PictureSvg from "../../assets/images/icon/picture.svg";
import HomeSvg from "../../assets/images/icon/home.svg";

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
