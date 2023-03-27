import React, { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
// component
import PostContent from "../../components/content/PostContent";
import BasicButton from "../../components/common/BasicButton";
// editor, colorPicker, axios
// https://nhn.github.io/tui.editor/latest/ToastUIEditorCore
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/i18n/ko-kr"; // 언어설정 kor
import colorSyntax from "@toast-ui/editor-plugin-color-syntax";
import "tui-color-picker/dist/tui-color-picker.css";
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";
import axios from "axios";

// mock data
import { PostData } from "../../MockData";

export default function PostNewPage() {
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
  // Markdown mode
  const rangeInfo = Editor.getRangeInfoOfNode();

  console.log(rangeInfo); // { range: [[startLineOffset, startCurorOffset], [endLineOffset, endCurorOffset]], type: 'emph' }

  // WYSIWYG mode
  const rangeInfo2 = Editor.getRangeInfoOfNode();

  console.log(rangeInfo2); // { range: [startCursorOffset, endCursorOffset], type: 'emph' }

  // 서버에 마크다운 형식 데이터 그대로 전송하기
  const editorRef = useRef();
  const [text, setText] = useState("");
  const handleClick = () => {
    setText(editorRef.current.getInstance().getMarkdown());
    console.log("작동함", text);
  };

  const submitData = {
    // Submit 버튼 데이터
    text: "Submit",
    onClick: handleClick,
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
        {/* <Editor
          initialValue="Write Here!"
          previewStyle="vertical"
          height="600px"
          initialEditType="markdown"
          useCommandShortcut={true}
        /> */}
        <Editor
          initialValue="에디터"
          previewStyle="vertical"
          height="600px"
          initialEditType="wysiwyg"
          useCommandShortcut={false}
          plugins={[colorSyntax]}
          language="ko-KR"
          toolbarItems={[
            // 툴바 옵션 설정
            ["heading", "bold", "italic", "strike"],
            ["hr", "quote"],
            ["ul", "ol", "task", "indent", "outdent"],
            ["table", "image", "link"],
            ["code", "codeblock"],
          ]}
        />

        <BasicButton data={submitData} />
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
`;
