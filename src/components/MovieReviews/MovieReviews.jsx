import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "../../services/api";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchMovieReviews(movieId).then((res) => setReviews(res));
  }, [movieId]);

  return (
    <ul>
      {reviews.length ? (
        reviews.map((review) => (
          <li key={review.id}>
            <strong>{review.author}</strong>: {review.content}
          </li>
        ))
      ) : (
        <p>No reviews available.</p>
      )}
    </ul>
  );
};
export default MovieReviews;
