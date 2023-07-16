import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import ModalHook from "../../util/ModalHook";

// component
import BasicButton from "../../components/common/BasicButton";
import BasicModal from "../../components/common/BasicModal";

// img
import ImgSvg from "../../assets/images/icon/image.svg";
import AddSvg from "../../assets/images/icon/add.svg";

// editor, axios
import "@toast-ui/editor/dist/toastui-editor-viewer.css";
import { Viewer } from "@toast-ui/react-editor";
import axios from "axios";
import "prismjs/themes/prism.css"; // code highlighter
import Prism from "prismjs";
import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight";
import "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css";
import moment from "moment";
import "moment/locale/ko";

export default function PostViewPage() {
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState("");
  const [commentInput, setCommentInput] = useState("");
  const [alertModal, setAlertModal] = useState(false);

  const alertModalData = {
    isState: {
      state: alertModal,
      setState: setAlertModal,
    },
    text: "검색어를 입력하세요",
  };

  const onChange = (e) => {
    setCommentInput(e.target.value);
    // console.log(commentInput);
    console.log(commentInput.length);
  };

  const AddCommend = (e) => {
    console.log(commentInput, moment().format("l"));
    setPost((state) => ({
      ...state,
      comments: [
        {
          id: post.comments ? post.comments.length : 0,
          text: setCommentInput(e.target.value),
          date: moment().format("l"),
        },
      ],
    }));

    console.log(post, post.comments?.length);
  };

  // const handleCommentSubmit = () => {
  //   setPost((prevPost) => {
  //     const newComment = {
  //       category: categoryList[0],
  //       postImg: "",
  //       title: "",
  //       desc: "",
  //       date: "0000.00.00.",
  //       comments: [
  //         // // id: prevPost.comment ? prevPost.comment.length : 0,
  //         // text: commentInput,
  //         // date: new Date().toISOString().slice(0, 10),
  //         // // date: moment().format("l"),
  //       ],
  //       // https://velog.io/@gene028/React-%EB%82%B4%EA%B0%80-%EC%9E%91%EC%84%B1%ED%95%9C-%EA%B8%80-%EB%8C%93%EA%B8%80-%EC%84%9C%EB%B2%84%EC%97%90-%EC%A0%80%EC%9E%A5%EC%8B%9C%ED%82%A4%EA%B8%B0
  //     };
  //     console.log(newComment);
  //   });
  //   setCommentInput("");
  // };

  const commentSubmitData = {
    // 댓글 등록 버튼 데이터
    submit: true,
    text: "등록",
    onClick: AddCommend,
    disabled: commentInput.length > 0 ? false : true,
  };
  const editButtonData = {
    // 수정버튼 데이터
    link: "edit",
    text: "수정",
  };
  const deleteButtonData = {
    // 삭제버튼 데이터
    link: "delete",
    text: "삭제",
  };

  useEffect(() => {
    setLoading(true); // 로딩중이다
    const url = `http://localhost:4000/posts/${id}`;
    // const url = "https://my.api.mockaroo.com/post.json?key=3c755570";
    // const url = `https://jsonplaceholder.typicode.com/photos/${id}`;
    axios
      .get(url)
      .then(function (response) {
        setPost(response.data);
        setLoading(false); // 로딩 끝!
      })
      .catch(function (error) {
        console.log("실패", error);
      });
  }, []);

  return (
    <Container>
      <BasicModal data={alertModalData} />
      <div className="post-detail">
        <hgroup>
          <h2>{post.category}</h2>
          <button className="post-detail__share" type="button">
            <span className="blind">공유</span>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M8.68445 10.6578L13 8.50003M15.3157 16.6578L11 14.5M21 6C21 7.65685 19.6569 9 18 9C16.3431 9 15 7.65685 15 6C15 4.34315 16.3431 3 18 3C19.6569 3 21 4.34315 21 6ZM9 12C9 13.6569 7.65685 15 6 15C4.34315 15 3 13.6569 3 12C3 10.3431 4.34315 9 6 9C7.65685 9 9 10.3431 9 12ZM21 18C21 19.6569 19.6569 21 18 21C16.3431 21 15 19.6569 15 18C15 16.3431 16.3431 15 18 15C19.6569 15 21 16.3431 21 18Z"
                  stroke="#59616f"
                  strokeWidth="1.5"
                ></path>
              </g>
            </svg>
          </button>
        </hgroup>
        {post.img ? (
          <figure>
            <img src={post.img} alt="포스트 이미지" />
          </figure>
        ) : (
          <figure className="empty-img-wrap">
            <img src={ImgSvg} alt="포스트 이미지가 없습니다." />
          </figure>
        )}
        <h3>{post.title}</h3>
        <hr />
        <div className="editor-viewer">
          {!loading && (
            <Viewer
              initialValue={post.desc}
              plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]}
            />
          )}
        </div>
        <time dateTime={post.date}>{post.date}</time>
        <div className="comment">
          <ul className="comment__list-wrap">
            {post?.comments?.map((list) => (
              <li key={list.id}>
                {list.text}
                {list.date}
              </li>
            ))}
          </ul>
          <div className="comment__input-wrap">
            <input
              type="text"
              placeholder="댓글을 입력해주세요."
              value={commentInput}
              onChange={onChange}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  if (e.target.value.length > 0) {
                    AddCommend(e);
                  } else {
                    setAlertModal(true);
                    ModalHook.modalOpen();
                  }
                }
              }}
            />
            <BasicButton data={commentSubmitData}></BasicButton>
          </div>
        </div>
      </div>

      <div className="util-wrap">
        <BasicButton data={editButtonData} />
        <BasicButton data={deleteButtonData} />
      </div>
    </Container>
  );
}

const Container = styled.div`
  hr {
    height: 0.1rem;
    background-color: var(--deepDarkGray);
    margin: 1rem 0 2rem;
  }

  .post-detail {
    hgroup {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1.8rem;
    }
    h2 {
      font-size: 2.5rem;
      color: var(--deepDarkGray);
    }
    h3 {
      font-size: 5rem;
      line-height: 1.3;
    }
    &__share {
      width: 3.5rem;
      height: 3.5rem;
      svg {
        width: 100%;
        height: 100%;
      }
    }
    figure {
      width: 100%;
      height: 40rem;
      object-fit: contain;
      border-radius: 1rem;
      overflow: hidden;
      margin-bottom: 2rem;
    }
    .editor-viewer {
      padding-bottom: 3rem;
      /* font-size: 1.4rem;
      line-height: 1.5; */
    }
    time {
      width: 100%;
      color: var(--deepDarkGray);
      font-size: 1.4rem;
      text-align: right;
    }
  }

  .comment {
    &__list-wrap {
    }
    &__input-wrap {
      width: 100%;
      display: flex;
      align-items: center;

      input {
        flex: 1;
        font-size: 1.8rem;
        padding: 1rem 2rem;
        border: 1px solid var(--mainGreen);
        border-radius: 4rem;
      }
      button {
        margin-left: 1rem;
      }
    }
  }

  .util-wrap {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
    align-items: center;
    * {
      font-size: 1.5rem;
    }
  }
`;
