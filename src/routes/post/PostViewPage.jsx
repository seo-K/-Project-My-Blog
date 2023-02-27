import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
// img
import ImgSvg from "../../assets/images/icon/image.svg";

// mock data
import { PostData } from "../../MockData";

export default function PostViewPage() {
  const { id } = useParams();
  // let 찾은상품 = props.shoes.find(function(상품){
  //   return 상품.id == id
  // });
  console.log(id);

  return (
    <Container>
      <h2>포스트</h2>
      <div>
        <p className="post-text">
          {PostData[id].category}
          {PostData[id].title}
        </p>
        {PostData[id].postImg ? (
          <figure>
            <img src={PostData[id].postImg} alt="포스트 이미지" />
          </figure>
        ) : (
          <figure className="empty-img-wrap">
            <img src={ImgSvg} alt="포스트 이미지가 없습니다." />
          </figure>
        )}
        <p className="post-text">{PostData[id].desc}</p>
      </div>
    </Container>
  );
}

const Container = styled.div`
  figure {
    width: 20rem;
    height: 20rem;
    object-fit: cover;
  }
`;
