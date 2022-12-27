import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

// mock data
import { PostData } from "../../MockData";

export default function PostPage() {
  const navigate = useNavigate();

  const iframePart = () => {
    return {
      __html: '<iframe src="../../html/three/index.html"></iframe>',
    };
  };

  const testHtml = `<p>hello</p>`;

  return (
    <Container>
      <h2 className="blind">포스트 리스트</h2>
      <ul className="post-list-wrap">
        {/* {
          MockData.length > 0 ?
          
        } */}
        {PostData?.map((item, index) => {
          return (
            <li key={"postList" + index}>
              <Link to="/">
                {item.postImg && (
                  <div className="post-img-wrap">
                    <img src={item.postImg} alt="포스트 이미지" />
                  </div>
                )}
                <h4 className="post-title">{item.title}</h4>
                <p className="desc">{item.desc}</p>

                <button>
                  <span>Read More</span>
                  <span className="read-more-icon"></span>
                </button>
              </Link>
            </li>
          );
        })}
      </ul>
      <a href="src/html/three/index.html">three js로 가기</a>
    </Container>
  );
}

const Container = styled.section`
  .post-list-wrap {
    display: flex;
    flex-wrap: wrap;
    & > li {
      width: 25%;
    }
  }
`;
