import React, { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
// component
import PostContent from "../../components/content/PostContent";
import BasicButton from "../../components/common/BasicButton";
import BasicModal from "../../components/common/BasicModal";
import ModalHook from "../../util/ModalHook";
// editor, colorPicker, axios
// https://nhn.github.io/tui.editor/latest/ToastUIEditorCore
// https://curryyou.tistory.com/473 image 업로드 방법 참고
// https://hayeondev.gatsbyjs.io/221021-tui-editor/ 플러그인 설명
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/i18n/ko-kr"; // 언어설정 kor
import colorSyntax from "@toast-ui/editor-plugin-color-syntax"; // color picker
import "tui-color-picker/dist/tui-color-picker.css";
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";
// code highlighter
// npm i prismjs = 구문 강조 표시기
// npm install @toast-ui/editor-plugin-code-syntax-highlight = code highlighter
import "prismjs/themes/prism.css";
import Prism from "prismjs";
import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight";
import "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css";

import axios from "axios";

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
  // const rangeInfo = editor.getRangeInfoOfNode();

  // console.log(rangeInfo); // { range: [[startLineOffset, startCurorOffset], [endLineOffset, endCurorOffset]], type: 'emph' }

  // WYSIWYG mode
  // const rangeInfo2 = editor.getRangeInfoOfNode();

  // console.log(rangeInfo2); // { range: [startCursorOffset, endCursorOffset], type: 'emph' }

  // 서버에 마크다운 형식 데이터 그대로 전송하기
  const editorRef = useRef();
  const [text, setText] = useState("");
  const onClickSubmit = () => {
    setText(editorRef.current.getInstance().getMarkdown());
    console.log("작동함", text);
  };
  const onClickCancel = () => {};

  // 팝업 열기
  const [isActiveModal, setIsActiveModal] = useState(false);
  const onClickCancelModalOpen = () => {
    setIsActiveModal(true);
    ModalHook.modalOpen();
  };
  const CancelModal = {
    isState: {
      state: isActiveModal,
      setState: setIsActiveModal,
    },
    text: "정말 취소하시겠습니까?",
    desc: "내용은 저장되지 않습니다.",
  };

  // 버튼
  const submitButton = {
    submit: true,
    text: "Submit",
    onClick: onClickSubmit,
  };
  const cancelButton = {
    text: "Cancel",
    onClick: onClickCancelModalOpen,
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
      {isActiveModal && <BasicModal data={CancelModal} />}
      <h2 className="blind">포스트 리스트</h2>
      <div className="content-wrap">
        {/* <Editor
          initialValue="Write Here!"
          previewStyle="vertical"
          height="600px"
          initialEditType="markdown"
          useCommandShortcut={true}
        /> */}
        <form action="">
          <fieldset>
            <legend className="blind">새 글 쓰기</legend>
            <div className="content-box">
              <div class="input-wrap">
                <label for="title">제목</label>
                <input
                  id="title"
                  type="text"
                  maxlength="50"
                  name="title"
                  data-name="title"
                  // value={title}
                  placeholder="Your title"
                  required
                />
              </div>

              <Editor
                initialValue="에디터"
                // previewStyle={window.innerWidth > 1000 ? "vertical" : "tab"} // tab, vertical
                previewStyle="vertical" // tab, vertical
                height="600px"
                initialEditType="wysiwyg" // wysiwyg & markdown
                // what you see is what you get = 보는대로 얻는다 문서 편집 과정에서 화면에 포맷된 낱말, 문장이 출력물과 동일하게 나오는 방식을 말한다
                useCommandShortcut={false}
                plugins={[colorSyntax, [codeSyntaxHighlight, { highlighter: Prism }]]}
                language="ko-KR"
                theme="dark"
                toolbarItems={[
                  // 툴바 옵션 설정
                  ["heading", "bold", "italic", "strike"],
                  ["hr", "quote"],
                  ["ul", "ol", "task", "indent", "outdent"],
                  ["table", "image", "link"],
                  ["code", "codeblock"],
                ]}
              />
            </div>
            {/* {editorRef && (
        <Editor
          ref={editorRef}
          initialValue={content || ' '} // 글 수정 시 사용
          initialEditType="markdown" // wysiwyg & markdown
          previewStyle={window.innerWidth > 1000 ? 'vertical' : 'tab'} // tab, vertical
          hideModeSwitch={true}
          height="calc(100% - 10rem)"
          theme={''} // '' & 'dark'
          usageStatistics={false}
          toolbarItems={toolbarItems}
          useCommandShortcut={true}
          plugins={[colorSyntax]}
        /> */}
            <div className="util-box">
              <BasicButton data={submitButton} />
              <BasicButton data={cancelButton} />
            </div>
          </fieldset>
        </form>
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
