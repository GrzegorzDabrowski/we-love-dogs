import axios from "axios";

export const fetchDogsApi = async (setDogsData) => {
  try {
    const fetchApi = await axios.get("https://dog.ceo/api/breeds/list/all");
    const response = await fetchApi.data;

    setDogsData(response.message);
  } catch (error) {
    alert("Something went wrong. Reload the page.");
  }
};
