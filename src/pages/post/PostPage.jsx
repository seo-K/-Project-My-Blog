import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import PostContent from "../../components/content/PostContent";
import axios from "axios";

// mock data
import { PostData } from "../../MockData";

export default function PostPage() {
  const navigate = useNavigate();

  // const RSS = "https://rss.blog.naver.com/seo-kkk";

  const [data, setData] = useState(null);

  const onClick = async () => {
    try {
      const ID_KEY = process.env.REACT_APP_CLIENT_ID;
      const SECRET_KEY = process.env.REACT_APP_CLIENT_SECRET;
      const response = await axios.get("https://openapi.naver.com/v1/search/blog.json", {
        params: {
          query: "경제",
        },
        headers: {
          "X-Naver-Client-Id": ID_KEY,
          "X-Naver-Client-Secret": SECRET_KEY,
        },
      });

      console.log(response);
      // setData(response);
    } catch (e) {
      console.log(e);
    }
  };

  // const handleButton = async () => {
  //   try {
  //     const res = await axios.get("http://localhost:3031/naver/getNaverMovie", {
  //       params: {
  //         query: query,
  //       },
  //     });
  //     if (res && res.status === 200) {
  //       const { data } = res;
  //       console.log(data);
  //       setItems(data.items);
  //     }
  //   } catch (e) {
  //     console.log("error ", e);
  //   }
  // };

  // await axios.get(
  //   "https://openapi.naver.com/v1/search/movie.json",  // 불러올 api 주소
  //   {
  //     params: { query: '영화이름' },  // query는 필수값
  //     headers: {
  //       "X-Naver-Client-Id": id,
  //       "X-Naver-Client-Secret": secret-id,
  //     },
  //   }
  // ).then((response) => {
  //   console.log('response', response.data.itmes);  // 영화 리스트
  // });

  return (
    <Container>
      <h2 className="blind">포스트 리스트</h2>

      <ul className="post-list-wrap">
        {PostData?.map((list) => {
          return (
            <li key={"postList" + list.id}>
              <PostContent data={list} />
            </li>
          );
        })}
      </ul>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {/* {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true} />} */}
      <a href="src/html/three/index.html">three js로 가기</a>
    </Container>
  );
}

const Container = styled.section`
  .post-list-wrap {
    display: flex;
    flex-wrap: wrap;
    /* justify-content: center; */
    gap: 1.5rem 1rem;

    & > li {
      flex: 0 0 calc((100% - 3rem) / 4);
    }
  }
`;
