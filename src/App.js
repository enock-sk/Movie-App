import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import MovieCard from "./MovieCard";
import searchIcon from "./search.svg";
const API_URL = "http://www.omdbapi.com?apikey=your api key";
const movie1 = {
  Title: "Reign of Judges: Title of Liberty - Concept Short",
  Year: "2018",
  imdbID: "tt4275958",
  Type: "movie",
  Poster:
    "N/A",
};
const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm]=useState('');
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s={title}`);
    const data = await response.json();
    setMovies(data.Search);
  };
  useEffect(() => {
    searchMovies("Spiderman");
  }, []);
  return (
    <div className="app">
      <h1>BEST MOVIES</h1>
      <div className="search">
        <input
          placeholder="Search for Movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img src={searchIcon} alt="search" onClick={() => searchMovies(searchTerm)} />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No Movies found</h2>
        </div>
      )}
    </div>
  );
};
export default App;
