import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
// component
import PostContent from "../../components/content/PostContent";
import BasicButton from "../../components/common/BasicButton";

import axios from "axios";

// mock data
import { PostData } from "../../MockData";

export default function PostPage() {
  const navigate = useNavigate();

  const [category, setCategory] = useState(0);
  const categoryList = [
    {
      id: 0,
      status: "All",
    },
    {
      id: 1,
      status: "Html",
    },
    {
      id: 2,
      status: "Css",
    },
    {
      id: 3,
      status: "Js",
    },
    {
      id: 4,
      status: "React",
    },
    {
      id: 5,
      status: "etc",
    },
  ];

  const onClick = () => {
    navigate("/new");
  };
  const buttonData = {
    link: true,
    text: "Create",
    onClick: onClick,
  };
  // useEffect(() => {
  //   if ( status === 'All' && keyword === '') {
  //     setBoard(PostData.slice((page - 1) * 6, page * 6));
  //     setBoardsCount(PostData.length);
  //   } else {
  //     const filteredList = PostData.reduce<PostProps[]>((acc, cur) => {
  //       const tagCondition = tag !== '전체' ? cur.tag === tag : true;
  //       const statusCondition = status !== 'ALL' ? cur.status === status : true;
  //       const keywordCondition = keyword.length > 0 ? cur.title.includes(keyword) : true;

  //       if (tagCondition && statusCondition && keywordCondition) {
  //         acc.push(cur);
  //       }

  //       return acc;
  //     }, []);

  //     setBoard(filteredList.slice((page - 1) * 6, page * 6));
  //     setBoardsCount(filteredList.length);
  //   }
  // }, [PostData, page, tag, status, keyword]);

  return (
    <Container>
      <h2 className="blind">포스트 리스트</h2>
      <div className="content-wrap">
        <ul className="tab-list">
          {categoryList.map((list, index) => (
            <li
              key={list.id}
              className={category == index && "active"}
              onClick={() => setCategory(index)}
            >
              <button type="button">{list.status}</button>
            </li>
          ))}
        </ul>
        <div className="button-wrap">
          <BasicButton data={buttonData} />
        </div>
        <ul className="post-list-wrap">
          {PostData?.map((list) => {
            return (
              <li key={"postList" + list.id}>
                <PostContent data={list} />
              </li>
            );
          })}
        </ul>
      </div>
      <a href="src/html/three/index.html">three js로 가기</a>
    </Container>
  );
}

const Container = styled.section`
  .tab-list {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row-reverse;
    margin-bottom: 2rem;
    li {
      position: relative;
    }
    /* li:after {
      position: absolute;
      left: 0;
      bottom: 0;
      content: "";
      width: 0;
      height: 2px;
      background-color: var(--mainYellow);
      transition: all 0.2s;
    } */
    li + li {
      margin-right: 1rem;
    }
    button {
      font-size: 1.3rem;
      font-weight: 700;
      padding: 0.8rem 1.5rem;
      border-radius: 2rem;
      box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px var(--white);
      transition: all 0.2s ease-in-out;
      &:focus {
      }
    }
    li.active:after {
      width: 100%;
    }
    .active button {
      box-shadow: inset 1px 1px 2px #babecc, inset -1px -1px 2px var(--white);
      color: var(--mainYellow);
      background-color: var(--beige);
    }
  }
  .button-wrap {
    text-align: right;
  }
  .post-list-wrap {
    display: flex;
    flex-wrap: wrap;
    gap: 3rem 1rem;
    margin-top: 3rem;
    > li {
      flex: 0 0 calc((100% - 3rem) / 4);
    }
    > li:hover a {
      box-shadow: 0 0 0 10px var(--mainYellow);
    }
  }
`;
