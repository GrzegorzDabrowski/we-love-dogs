import { useEffect } from "react";
import ModalButton from "./ModalButton";
import { fetchDogImg } from "./utils/fetchDogImg";

const Modal = ({
  openModal,
  breedName,
  handleCloseModal,
  dogImg,
  setDogImg,
}) => {
  useEffect(() => {
    breedName && fetchDogImg(breedName, setDogImg);
  }, [breedName, setDogImg]);

  return (
    <>
      {openModal && (
        <div className="modal-wrapper">
          <div className="modal-container">
            <div className="modal-header">
              <h1>{breedName}</h1>
            </div>
            <div className="modal-content">
              <img src={dogImg} alt={breedName} />
            </div>
            <div className="modal-footer">
              <ModalButton handler={handleCloseModal} text="Close" />
              <ModalButton
                handler={() => fetchDogImg(breedName, setDogImg)}
                text="Generate"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
