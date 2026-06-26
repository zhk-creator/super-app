import axios from "axios";

const API_KEY = "YOUR_OMDB_API_KEY";

export const getMovies = async (category) => {
  try {
    const response = await axios.get(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${category}`
    );

    return response.data.Search || [];
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getMovieDetails = async (id) => {
  try {
    const response = await axios.get(
      `https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}&plot=full`
    );

    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};