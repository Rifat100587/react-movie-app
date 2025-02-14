import "../css/MovieCard.css";
import { useMovieContext } from "../context/MovieContext";

function MovieCard({ movie }) {
  const { isFav, addToFav, removeFav } = useMovieContext();
  const fav = isFav(movie.id);

  const onClick = (e) => {
    e.preventDefault();
    if (fav) {
      removeFav(movie.id);
    } else {
      addToFav(movie);
    }
  };

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="movie-overlay">
          <button className="fav-btn" onClick={onClick}>
            {fav ? "♥" : "♡"}
          </button>
        </div>
      </div>
      <div className="movie-details">
        <h3>{movie.title}</h3>
        <p>{movie.release_date}</p>
      </div>
    </div>
  );
}

export default MovieCard;
