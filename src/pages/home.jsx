import MovieCard from "../components/MovieCards";
import { useEffect, useState } from "react";
import "../css/home.css";
import { getPopularMovies } from "../services/api";
function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const PopularMovies = await getPopularMovies()
        setMovies(PopularMovies);
      } catch (err) {
        console.log(err);
        setError("Error fetching movies");
      }
      finally {
        setLoading(false);
      }
    }
    loadPopularMovies();
  }, [])

  const handleSearch = async (e) => {
    e.preventDefault();
    if(!searchQuery.trim()) return;
    if (loading) return;

    setLoading(true);
     try {
      const searchResults = await getPopularMovies(searchQuery);
      setMovies(searchResults);
    } catch (err) {
      console.log(err);
      setError("Error fetching movies");
    } finally {
      setLoading(false);
    }


  };
  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for a movie"
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-btn">
          Search
        </button>
      </form>
      {error && <div className="error">{error}</div>}
      {loading ? (<div>Loading...</div>) : (
        <div className="movie-list">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
