import React from "react";
import styled, { keyframes } from "styled-components";
import ModalHook from "../../util/ModalHook";
import BasicButton from "./BasicButton";
// image
import CloseSvg from "../../assets/images/icon/close.svg";
export default function BasicModal({ data }) {
  const { isState, text, desc } = data || "";

  // 팝업 닫기
  const onClickClose = () => {
    isState.setState(false);
    ModalHook.modalClosed();
  };

  // 확인 버튼
  const confirmButton = {
    text: "confirm",
    onClick: onClickClose,
  };

  return (
    <React.Fragment>
      {isState.state === true && (
        <ModalContainer>
          <div className="modal-bg" onClick={onClickClose}></div>
          <div className="modal-content">
            <button className="modal-content__close-button" type="button" onClick={onClickClose}>
              <img src={CloseSvg} alt="닫기" />
            </button>
            <p className="modal-content__title">{text}</p>
            {desc && <p className="modal-content__desc">{desc}</p>}
            <div className="modal-content__button-wrap">
              <BasicButton data={confirmButton} />
            </div>
          </div>
        </ModalContainer>
      )}
    </React.Fragment>
  );
}

const ZoomIn = keyframes`
  0% {
    transform: translateY(10rem) scale(0);
    opacity: 0;
  }
  70% {
    transform: translateY(0)  scale(1.05);
    opacity: 1;
  }
  100% {
    transform: translateY(0) scale(1);
    opacity: 1;
  }
`;

const ModalContainer = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 25;
  .modal-bg {
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
  }
  .modal-content {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 40rem;
    max-height: 90vh;
    padding: 5rem 5rem 2rem;
    border-radius: 2rem;
    background-color: var(--white);
    overflow: hidden;
    z-index: 30;
    transform-origin: center;
    animation: ${ZoomIn} 0.5s forwards;

    &__close-button {
      position: absolute;
      top: 1rem;
      right: 1rem;
      width: 3rem;
      height: 3rem;
    }
    &__title {
      font-size: 1.8rem;
      text-align: center;
      font-weight: bold;
      line-height: 1;
    }
    &__desc {
      font-size: 1.5rem;
      text-align: center;
      color: var(--deepDarkGray);
      line-height: 1;
      letter-spacing: -1.5px;
      margin-top: 2rem;
    }
    &__button-wrap {
      display: flex;
      justify-content: center;
      margin-top: 5rem;
    }
  }
`;
