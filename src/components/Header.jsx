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
    <header>
      <h1>Booflix</h1>
      <form onSubmit={hadleSearchSubmit}>
        <input value={userTerm} onChange={handleUserTermChange} type="text" />
        <button>Cerca</button>
      </form>
    </header>
  );
}
