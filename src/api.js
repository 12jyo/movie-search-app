const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = process.env.REACT_APP_BASE_URL;

export const fetchMovies = async (searchTerm = 'popular') => {
  console.log("API_KEY", API_KEY, BASE_URL, process.env)
  const response = await fetch(`${BASE_URL}?s=${searchTerm}&apikey=${API_KEY}`);
  const data = await response.json();
  return data.Search || [];
};

export const fetchMovieDetails = async (movieId) => {
  const response = await fetch(`${BASE_URL}?i=${movieId}&apikey=${API_KEY}`);
  const data = await response.json();
  return data;
};
