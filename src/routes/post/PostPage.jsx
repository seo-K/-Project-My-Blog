import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
// component
import BasicButton from "../../components/common/BasicButton";
import Pagination from "../../components/pagination/Pagination";
import PostContent from "../../components/content/PostContent";
import PostContentSkeleton from "../../components/content/PostContentSkeleton";

import axios from "axios";

// mock data
import { PostData } from "../../MockData";
// img
import AddSvg from "../../assets/images/icon/add.svg";

export default function PostPage() {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("new");
  };

  const [loading, setLoading] = useState(true);

  const buttonData = {
    link: "new",
    text: (
      <>
        <img src={AddSvg} alt="포스트 추가" />
        Create
      </>
    ),
  };

  // photos, setPost 비구조화 할당
  const [posts, setPost] = useState([]);
  const [filterList, setFilterList] = useState([]);
  const categoryList = ["All", "Html", "Css", "Javascript", "React", "Etc"];
  const [activeCategory, setActiveCategory] = useState(0);

  // 통신 메서드
  useEffect(() => {
    setLoading(true);
    const url = "http://localhost:4000/posts";
    // const url = "https://my.api.mockaroo.com/post.json?key=3c755570";
    // const url = "https://jsonplaceholder.typicode.com/photos";
    axios
      .get(url)
      .then(function (response) {
        setLoading(false);
        setPost(response.data);
        setFilterList(response.data);
        // console.log(response.data);
      })
      .catch(function (error) {
        console.log("실패");
      });
  }, []);

  // const searchList = PostData.filter((word) => {
  //   return word.title.toLowerCase().includes(searchWord.toLowerCase());
  // });

  const filtering = () => {
    if (activeCategory !== 0) {
      const filtered = posts.filter((post) => post.category === categoryList[activeCategory]);
      setFilterList(filtered);
      console.log(filtered);
    } else {
      setFilterList(posts);
    }
  };

  // 필터링
  useEffect(() => {
    filtering();
  }, [activeCategory]);

  // searchApi();

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
          {categoryList.map((item, index) => {
            return (
              <li
                key={index}
                className={activeCategory == index ? "active" : undefined}
                onClick={() => setActiveCategory(index)}
              >
                <button type="button">{item}</button>
              </li>
            );
          })}
        </ul>
        <div className="button-wrap">
          <BasicButton data={buttonData} />
        </div>
        <ul className="post-list-wrap">
          {loading ? (
            new Array(6).fill(1).map((_, i) => {
              return (
                <li key={i}>
                  <PostContentSkeleton />
                </li>
              );
            })
          ) : filterList.length > 0 ? (
            filterList.map((list) => {
              return (
                <li key={list.id}>
                  <PostContent data={list} />
                </li>
              );
            })
          ) : (
            <p className="empty-content">포스트가 없습니다.</p>
          )}
        </ul>
        <div className="pagination-wrap">
          <Pagination />
        </div>
      </div>
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
  .pagination-wrap {
    margin-top: 3rem;
  }
`;
