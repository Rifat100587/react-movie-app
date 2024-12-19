import "../css/favorites.css";
import { useMovieContext } from "../context/MovieContext";
import MovieCard from "../components/MovieCards";

function Favorites() {
  const { favorites } = useMovieContext(); // Corrected to use `favorites`

  if (favorites.length > 0) {
    // Check if there are any favorites
    return (
      <div>
        <h2>Your Favorites</h2>
        <div>
          {favorites.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}{" "}
          {/* Closed the map properly */}
        </div>
      </div>
    );
  }

  return (
    <div className="favorites">
      <h2>Favorites</h2>
      <p>No favorites have been added</p> {/* Grammar fix */}
    </div>
  );
}

export default Favorites;
