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

// img
import ArrowIconSvg from "../../assets/images/icon/arrow_down.svg";

export default function PostNewPage() {
  const navigate = useNavigate();

  const categoryList = ["All", "Html", "Css", "Js", "React", "etc"];

  // form
  const [formData, setFormData] = useState({
    category: categoryList[0],
    postImg: "",
    title: "ddd",
    desc: "",
    date: new Date(),
  });

  const editorRef = useRef();
  const onChange = (e) => {
    console.log(formData);
  };

  // 전송
  const handleSubmit = (e) => {
    e.preventDefault();
    const editorData = editorRef?.current?.getInstance().getHTML();

    axios
      .post("http://localhost:4000/posts", {
        category: formData.category,
        // postImg: formData.postImg,
        title: formData.title,
        desc: formData.desc,
        date: formData.date,
        editorData: editorData,
      })
      .then((response) => {
        console.log(response);
        navigate("/post");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // 취소 모달
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
  };
  const cancelButton = {
    text: "Cancel",
    onClick: onClickCancelModalOpen,
  };

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
        <form action="" onSubmit={handleSubmit}>
          <fieldset>
            <legend className="blind">새 글 쓰기</legend>
            <div className="content-box">
              <div className="content-box__title-wrap">
                <select name="category" value={formData.category} onChange={onChange}>
                  {categoryList.map((item, index) => (
                    <option key={"category" + index} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
                <div className="input-wrap">
                  <label className="blind" htmlFor="title">
                    제목
                  </label>
                  <input
                    id="title"
                    type="text"
                    maxLength="150"
                    name="title"
                    data-name="title"
                    placeholder="Your title"
                    required
                    value={formData.title}
                    onChange={onChange}
                  />
                </div>
              </div>
              <div className="content-box__editor">
                <Editor
                  ref={editorRef}
                  initialValue="에디터"
                  // previewStyle={window.innerWidth > 1000 ? "vertical" : "tab"} // tab, vertical
                  previewStyle="vertical" // tab, vertical
                  height="100%"
                  initialEditType="wysiwyg" // wysiwyg & markdown
                  // what you see is what you get = 보는대로 얻는다 문서 편집 과정에서 화면에 포맷된 낱말, 문장이 출력물과 동일하게 나오는 방식을 말한다
                  useCommandShortcut={false}
                  plugins={[colorSyntax, [codeSyntaxHighlight, { highlighter: Prism }]]}
                  theme={""} // '' & 'dark'
                  language="ko-KR"
                  hideModeSwitch="true"
                  toolbarItems={[
                    // 툴바 옵션 설정
                    ["heading", "bold", "italic", "strike"],
                    ["hr", "quote"],
                    ["ul", "ol", "task", "indent", "outdent"],
                    ["table", "image", "link"],
                    ["code", "codeblock"],
                    ["scrollSync"],
                  ]}
                  onChange={onChange}
                />
              </div>
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
              <div className="util-box__button-wrap">
                <BasicButton data={cancelButton} />
                <BasicButton data={submitButton} />
              </div>
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
  fieldset {
    display: flex;
    gap: 3rem;
  }
  .content-box {
    flex-shrink: 0;
    width: 70%;
    &__title-wrap {
      display: flex;
      align-items: center;
      border: 1px solid var(--border);
      border-bottom: none;
    }
    select {
      flex-shrink: 0;
      width: 15rem;
      height: 100%;
      font-size: 1.4rem;
      text-indent: -0.7rem;
      text-align: center;
      background: var(--beige) url(${ArrowIconSvg}) no-repeat 85% center / 1rem 1rem;
      padding: 2rem 0;
    }
    .input-wrap {
      flex: 1;
      display: flex;
      align-items: center;
    }
    input {
      width: 100%;
      font-size: 1.4rem;
      padding: 1.4rem 2rem;
      background-color: var(--white);
      border-left: 1px solid var(--border);
    }
    &__editor {
      height: 70vh;
    }
  }

  .util-box {
    flex: 1;
    &__button-wrap {
      display: flex;
      gap: 1rem;
    }
    &__button-wrap button {
      flex: 1;
    }
  }
`;
