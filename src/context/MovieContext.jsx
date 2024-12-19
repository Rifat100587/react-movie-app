import { createContext, useContext, useState, useEffect } from "react";

const movieContext = createContext();

export const useMovieContext = () => useContext(movieContext);

export const MovieProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavs = localStorage.getItem("favorites");
    if (storedFavs) setFavorites(JSON.parse(storedFavs));
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addToFav = (movie) => {
    setFavorites((prev) => [...prev, movie]);
  };

  const removeFav = (movieID) => {
    setFavorites((prev) => prev.filter((movie) => movie.id !== movieID));
  };

  const isFav = (movieID) => {
    return favorites.some((movie) => movie.id === movieID);
  };

  const value = {
    favorites,
    addToFav,
    removeFav,
    isFav,
  };

  return (
    <movieContext.Provider value={value}>{children}</movieContext.Provider>
  );
};
