import { useState } from "react";
import { useGlobalContext } from "./contexts/GlobalContext";
import Header from "./components/Header";

function App() {
  const { movies, searchMovies } = useGlobalContext();

  return (
    <>
      <Header />
      <main>
        <h2>Movie List</h2>
        {movies.map((movie) => (
          <ul key={movie.id}>
            <li>Immagine</li>
            <li>
              <strong>Titolo:</strong>
              {movie.title}
            </li>
            <li>
              <strong>Titolo Originale:</strong>
              {movie.original_title}
            </li>
            <li>
              <strong>Lingua:</strong>
              {movie.original_language}
            </li>
            <li>
              <strong>Voto:</strong>
              {movie.vote_average}
            </li>
          </ul>
        ))}
      </main>
    </>
  );
}

export default App;
