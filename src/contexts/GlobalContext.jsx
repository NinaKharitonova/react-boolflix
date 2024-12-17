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
        const normalizedDate = data.results.map((movie) => {
          const {
            id,
            poster_path,
            title,
            original_title,
            original_language,
            vote_average,
          } = movie;

          return {
            id,
            poster: poster_path,
            title,
            original_title,
            lang: original_language,
            vote_average,
          };
        });

        setGlobalDate((previousGlobalDate) => ({
          ...previousGlobalDate,
          movies: normalizedDate,
        }));
      });
  };

  const fetchSeries = (term) => {
    const fetchConfig = {
      method: "GET",
      headers,
    };

    fetch(`${apiUrl}/search/tv?query=${term}`, fetchConfig)
      .then((res) => res.json())
      .then((data) => {
        const normalizedDate = data.results.map((serie) => {
          const {
            id,
            poster_path,
            name,
            original_name,
            original_language,
            vote_average,
          } = serie;

          return {
            id,
            poster: poster_path,

            title: name,
            original_title: original_name,
            lang: original_language,
            vote_average,
          };
        });

        setGlobalDate((previousGlobalDate) => ({
          ...previousGlobalDate,
          series: normalizedDate,
        }));
      });
  };

  const [previousGlobalDate, setGlobalDate] = useState({
    movies: [],
    searchMovies: fetchMovies,
    series: [],
    searchSeries: fetchSeries,
  });

  return (
    <GlobalContext.Provider value={previousGlobalDate}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
