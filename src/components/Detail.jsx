import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./detail.css";

export const Detail = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [movie, setMovie] = useState({});
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const apiKey = "113ea8a560a67d49a46e9d4001651148";
    const apiUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`;

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((movie) => {
        setMovie(movie);
        setLoading(false);
      })
      .catch((error) => {
        setError("Error fetching popular movies:", error);
        setLoading(false);
      });
  }, [id]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`}
            alt={movie.title}
          />
          <div className="movie-detail">
            <div className="title-rating">
              <h2>{movie.title}</h2>
              <h3>{movie.vote_average}</h3>
            </div>
            <p>{movie.overview}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Detail;
