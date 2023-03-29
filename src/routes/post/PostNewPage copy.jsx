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

  const categoryList = [
    {
      id: 0,
      category: "All",
    },
    {
      id: 1,
      category: "Html",
    },
    {
      id: 2,
      category: "Css",
    },
    {
      id: 3,
      category: "Js",
    },
    {
      id: 4,
      category: "React",
    },
    {
      id: 5,
      category: "etc",
    },
  ];

  // form
  const [formData, setFormData] = useState({
    category: categoryList[0],
    postImg: "",
    title: "",
    desc: "",
    date: new Date(),
  });

  // Markdown mode
  // const rangeInfo = editor.getRangeInfoOfNode();

  // console.log(rangeInfo); // { range: [[startLineOffset, startCurorOffset], [endLineOffset, endCurorOffset]], type: 'emph' }

  // WYSIWYG mode
  // const rangeInfo2 = editor.getRangeInfoOfNode();

  // console.log(rangeInfo2); // { range: [startCursorOffset, endCursorOffset], type: 'emph' }

  // 서버에 마크다운 형식 데이터 그대로 전송하기
  // const editorRef = useRef();
  // const [text, setText] = useState("");
  // const handleSubmit = () => {
  //   setText(editorRef.current.getInstance().getMarkdown());
  //   console.log("작동함", text);
  // };

  const editorRef = useRef();
  // html형식으로 텍스트를 가져오려면, getHTML()
  // 마크다운 형식으로 텍스트를 가져오려면, getMarkdown()
  const onChange = (e) => {
    const editorData = editorRef?.current.getInstance().getHTML();

    setFormData({
      category: categoryList[0],
      postImg: "",
      title: "",
      desc: JSON.stringify(editorData),
      date: new Date(),
      // ...formData,
      // [e.target.name]: e.target.value,
      // desc: JSON.stringify(editorData),
      // [e.target.name]: e.target.name == "desc" ? JSON.stringify(editorData) : e.target.value,
    });
    console.log(formData);
  };

  // const handleChange = e => {
  //   setFrData({
  //     ...frData,
  //     [e.target.name]: e.target.name == 'newsletter' ? e.target.checked : e.target.value,
  //   });
  // };

  // 전송
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    // const editorData = editorRef.current.getInstance().getHTML();

    // console.log("전송할데이터", JSON.stringify(formData), formData);
    // console.log("작동함", text);
    // axios.post(`${process.env.REACT_APP_API}/mail`, form, {
    //   headers: {
    //     'Content-type' : 'application/json',
    //     Accept : 'application/json',
    //   },
    // } )
    // .then(response => {
    //   console.log('result' , response.data);
    //   navigate(`complete`)
    // })
    // .catch(response => {
    //   console.log('Error!', response)
    // })
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
    onClick: handleSubmit,
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
              <div className="content-box__title-wrap">
                <select name="category" id="" value={formData.inquiry} onChange={onChange}>
                  {categoryList.map((item) => (
                    <option key={item.id} value={item.category}>
                      {item.category}
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
                    onChange={onChange}
                    value={formData.title}
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
