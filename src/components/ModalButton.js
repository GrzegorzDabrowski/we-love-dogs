const ModalButton = ({ text, handler }) => {
  return (
    <button onClick={handler} className="button">
      {text}
    </button>
  );
};

export default ModalButton;
