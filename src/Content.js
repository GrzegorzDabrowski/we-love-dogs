import { useEffect, useState } from "react";
import Modal from "./Modal";
import BreedsGrid from "./BreedsGrid";
import { fetchDogsApi } from "./utils/fetchDogsApi";

const Content = () => {
  const [dogsData, setDogsData] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const [breedName, setBreedName] = useState("");
  const [dogImg, setDogImg] = useState("");

  useEffect(() => {
    fetchDogsApi(setDogsData);
  }, []);

  const handleOpenModal = (breed) => {
    setOpenModal(true);
    setBreedName(breed);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setDogImg("");
  };

  return (
    <>
      <BreedsGrid dogsData={dogsData} handleOpenModal={handleOpenModal} />
      <Modal
        openModal={openModal}
        breedName={breedName}
        handleCloseModal={handleCloseModal}
        dogImg={dogImg}
        setDogImg={setDogImg}
      />
    </>
  );
};

export default Content;
