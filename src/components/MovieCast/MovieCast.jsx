import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { fetchMovieCast } from "../../services/api";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchMovieCast(movieId).then((res) => {
      setCast(res);
    });
  }, []);

  return (
    <ul>
      {cast.map((actor) => (
        <li key={actor.id}>
          <p>{actor.name}</p>
          <img
            src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
            alt="No image"
          />
        </li>
      ))}
    </ul>
  );
};
export default MovieCast;
