const BreedsGrid = ({ dogsData, handleOpenModal }) => {
  return (
    <div className="content-container">
      {Object.keys(dogsData).map((breed) => {
        return (
          <button
            key={breed}
            className="content-btn"
            onClick={() => handleOpenModal(breed)}
          >
            {breed}
          </button>
        );
      })}
    </div>
  );
};

export default BreedsGrid;
