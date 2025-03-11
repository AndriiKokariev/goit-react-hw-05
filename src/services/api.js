import axios from "axios";

const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OTQyZjZiNGRjY2FlMDAzYTM2MDhkNjFiYzMwNGYxZSIsIm5iZiI6MTc0MTMwMjEzMC42OTYsInN1YiI6IjY3Y2EyOTcyMWY5ZWYzNTMyZGFmYmFiMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dEIYFTdTeYhZMXVE6fqxX3GPttaQxXg-HsR6BFwUS58";
const BASE_URL = "https://api.themoviedb.org/3";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
  },
});

export async function fetchTrendingMovies() {
  const response = await api.get("/trending/movie/day");
  return response.data.results;
}

export async function searchMovies(query) {
  const response = await api.get("/search/movie", {
    params: { query },
  });
  return response.data.results;
}

export async function fetchMovieDetails(movieId) {
  const response = await api.get(`/movie/${movieId}`);
  return response.data;
}

export async function fetchMovieCast(movieId) {
  const response = await api.get(`/movie/${movieId}/credits`);
  return response.data.cast;
}

export async function fetchMovieReviews(movieId) {
  const response = await api.get(`/movie/${movieId}/reviews`);
  return response.data.results;
}
