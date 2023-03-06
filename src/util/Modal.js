//modal
const body = document.body;

const modalOpen = () => {
  body.style.overflow = 'hidden';
};

const modalClosed = () => {
  body.style.overflow = 'auto';
};

const Modal = {modalOpen, modalClosed};

export default Modal;
