const API_KEY = '2c28997';
const API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}`;

export const searchMovies = async (query, pageNumber = 1) => {
  if (!query) {
    return { data: { Response: 'False', Error: 'Termo de busca vazio.' } };
  }
  const response = await fetch(`${API_URL}&s=${query}&page=${pageNumber}`);
  const data = await response.json();
  return data;
};

export const getMovieById = async (id) => {
  const response = await fetch(`${API_URL}&i=${id}&plot=full`);
  const data = await response.json();
  return data;
};