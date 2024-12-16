import React, { Children, createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ Children }) => {
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  const [search, setSearch] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedGener, setSelectedGener] = useState("");

  return (
    <AppContext.Provider
      value={{
        movies,
        setMovies,
        series,
        setSeries,
        search,
        setSearch,
        isLoading,
        setIsLoading,
        selectedGener,
        setSelectedGener,
      }}
    >
      {Children}
    </AppContext.Provider>
  );
};
