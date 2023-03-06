import React from "react";
import styled from "styled-components";
import Modal from "../../util/Modal";

export default function BasicModal({ data }) {
  const { isState } = data || "";

  // 팝업 닫기
  const onClickClose = () => {
    isState.setState(false);
    Modal.modalClosed();
  };

  return (
    <React.Fragment>
      {isState.state === true && (
        <ModalContainer>
          <div className="modal-bg" onClick={onClickClose}></div>
          <div className="modal-content">
            <p className="modal-content__title">{modalTItle}</p>
            <button onClick={onClickClose} type="button" className="modal-content__button">
              확인
            </button>
          </div>
        </ModalContainer>
      )}
    </React.Fragment>
  );
}

const ModalContainer = styled.header``;
