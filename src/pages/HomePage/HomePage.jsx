import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../../services/api.js";
import s from "../HomePage/HomePage.module.css";
import MovieList from "../../components/MovieList/MovieList.jsx";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchTrendingMovies()
      .then((data) => setMovies(data))
      .catch((e) => console.error(e))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className={s.homePage}>
      <h1 className={s.homeTitle}>Trending today</h1>
      <MovieList movies={movies} isLoading={isLoading} />
    </div>
  );
};

export default HomePage;
