//modal hook
const body = document.body;

const modalOpen = () => {
  body.style.overflow = "hidden";
};

const modalClosed = () => {
  body.style.overflow = "auto";
};

const ModalHook = { modalOpen, modalClosed };

export default ModalHook;
