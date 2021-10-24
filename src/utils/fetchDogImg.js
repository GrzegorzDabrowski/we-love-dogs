import axios from "axios";

export const fetchDogImg = async (breedName, setDogImg) => {
  try {
    const fetchApi = await axios.get(
      `https://dog.ceo/api/breed/${breedName}/images/random`
    );
    const response = fetchApi.data;

    setDogImg(response.message);
  } catch (error) {
    alert("Something went wrong. Reload the page.");
  }
};
