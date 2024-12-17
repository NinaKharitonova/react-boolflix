import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const apiUrl = "https://api.themoviedb.org/3";
  const headers = {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMGZhZTdiNzRhNzE5MTg0NDBhZDdhMDhkMDhhNzIxNiIsIm5iZiI6MTczNDM0NTMyOC44NjYsInN1YiI6IjY3NjAwMjcwZThhNjRhZDc3ZDc2Njc3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-vkvW7x-FWuJtbS4FLBzQoey65-6aK-FwD1YHnlOR8k",
  };

  const fetchMovies = (term) => {
    const fetchConfig = {
      method: "GET",
      headers,
    };

    fetch(`${apiUrl}/search/movie?query=${term}`, fetchConfig)
      .then((res) => res.json())
      .then((data) => {
        setGlobaldate({
          ...globalDate,
          movies: data.results,
        });
      });
  };

  const [globalDate, setGlobaldate] = useState({
    movies: [],
    searchMovies: fetchMovies,
    series: [],
  });

  return (
    <GlobalContext.Provider value={globalDate}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
