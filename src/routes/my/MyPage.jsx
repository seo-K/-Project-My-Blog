import React, { useEffect, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

export default function MyPage() {
  const navigate = useNavigate();
  // const goWhere = () => {
  //   return navigate("/company/registerPost");
  // };

  const [myInfo, setMyInfo] = useState([]); // myInfo 담는 곳

  useEffect(() => {
    const url = `https://www.tistory.com/apis/blog/info?access_token=${process.env.REACT_APP_TISTORY_TOKEN}&output=json`;
    axios
      .get(url)
      .then(function (response) {
        const { item } = response.data.tistory;
        console.log(item);
      })
      .catch(function (error) {
        console.log("실패");
      });
  }, []);

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
