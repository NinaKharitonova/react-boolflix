import { useState } from "react";

import { useGlobalContext } from "../contexts/GlobalContext";

export default function Header() {
  const { searchMovies, searchSeries } = useGlobalContext();

  const [userTerm, setUserTerm] = useState("");

  const hadleSearchSubmit = (e) => {
    e.preventDefault();
    searchMovies(userTerm);
    searchSeries(userTerm);
  };
  const handleUserTermChange = (e) => {
    setUserTerm(e.target.value);
  };

  return (
    <header className="header-page">
      <h1 className="logo">Booflix</h1>
      <form onSubmit={hadleSearchSubmit} className="searchbar-page">
        <input
          value={userTerm}
          onChange={handleUserTermChange}
          type="text"
          placeholder="Cerca un film o una serie"
          className="input"
        />
        <button className="button">Cerca</button>
      </form>
    </header>
  );
}
