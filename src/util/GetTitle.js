// 페이지 이동시 타이틀 변경해주는 함수
import { useState, useEffect } from "react";

export default function GetTitle() {
  const [title, setTitle] = useState(null);

  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerHTML = title;
    // document.title = title;
    // console.log(title);
  };
  useEffect(updateTitle, [title]);

  return setTitle;
}
