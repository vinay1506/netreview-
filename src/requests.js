const API_KEY = "68ab438d97adfa94cb0ed088d061440b";
const BASE_URL = 'https://api.themoviedb.org/3';


const requests = {
    fetchTrending: `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_networks=213&with_original_language=en`,
    fetchThrillerMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=53`,
    fetchTopRated: `${BASE_URL}/discover/tv?api_key=${API_KEY}&sort_by=vote_average.desc&vote_count.gte=1000`,
    fetchActionMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchHorrorMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_companies=2`,
    fetchComedyMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchDocumentaries: `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=10765`,
    fetchDCMovies: `${BASE_URL}/search/company?api_key=${API_KEY}&query=dc%20films`,
    fetchAnime: `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=16&with_original_language=ja`,
    fetchMarvelMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_companies=420`,
    fetchTopRatedTeluguMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_original_language=te&sort_by=vote_average.desc&vote_count.gte=50`,
  };
  
export default requests;