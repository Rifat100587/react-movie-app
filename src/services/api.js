const API = "51c8192d6d0b3120c6d2307585b953de";
const API_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async (query = "") => {
  const endpoint = query
    ? `${API_URL}/search/movie?api_key=${API}&query=${query}`
    : `${API_URL}/movie/popular?api_key=${API}`;
  const response = await fetch(endpoint);
  const data = await response.json();
  return data.results;
};


export const getSearch = async (query) => {
  const response = await fetch(
    `${API_URL}search/movie?api_key=${API} & query=${encodeURIComponent(query)}`
  );
  const data = await response.json();
  return data.results;
};
