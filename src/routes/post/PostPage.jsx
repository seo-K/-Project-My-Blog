import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
// component
import BasicButton from "../../components/common/BasicButton";
import Pagination from "../../components/pagination/Pagination";
import PostContent from "../../components/content/PostContent";

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
  const [posts, setPost] = useState([]); // post 담는 곳
  const [loading, setLoading] = useState(true); // 로딩여부
  const [filterList, setFilterList] = useState([]); // 필터된 post 담는 곳
  const categoryList = ["All", "Html", "Css", "Javascript", "React", "Etc"]; // 카테고리
  const [activeCategory, setActiveCategory] = useState(0);

  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);

  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const currentPosts = (post) => {
    let currentPosts = 0;
    currentPosts = post.slice(indexOfFirst, indexOfLast);
    return currentPosts;
  };

  const paginationData = {
    postsPerPage: postsPerPage,
    totalPosts: posts.length,
    paginate: setCurrentPage,
    currentPage: currentPage,
  };

  // 통신 메서드
  useEffect(() => {
    setLoading(true); // 로딩중이다
    const url = "http://localhost:4000/posts";
    // const url = "https://my.api.mockaroo.com/post.json?key=3c755570";
    // const url = "https://jsonplaceholder.typicode.com/photos";
    axios
      .get(url)
      .then(function (response) {
        setPost(response.data); // 데이터 받아옴
        setLoading(false); // 로딩끝!
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
          <label>
            페이지 당 표시할 게시물 수:&nbsp;
            <select
              type="number"
              // value={limit}
              // onChange={({ target: { value } }) => setLimit(Number(value))}
            >
              <option value="10">10</option>
              <option value="12">12</option>
              <option value="20">20</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
          </label>
        </div>
        <ul className="post-list-wrap">
          {currentPosts(filterList).length > 0 ? ( // 렌더링된 post 데이터가 있을때
            <React.Fragment>
              {currentPosts(filterList).map((item, index) => {
                return (
                  <li key={item.id}>
                    <PostContent data={item} loading={loading} />
                  </li>
                );
              })}
            </React.Fragment>
          ) : (
            // 렌더링된 post 데이터 0 일때
            <p className="empty-content">포스트가 없습니다.</p>
          )}

          {/* {filterList.length > 0 ? ( // 렌더링된 post 데이터가 있을때
            filterList.map((list) => {
              return (
                <li key={list.id}>
                  <PostContent data={list} loading={loading} />
                </li>
              );
            })
          ) : (
            // 렌더링된 post 데이터 0 일때
            <p className="empty-content">포스트가 없습니다.</p>
          )} */}
        </ul>
        <div className="pagination-wrap">
          <Pagination data={paginationData} />
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
