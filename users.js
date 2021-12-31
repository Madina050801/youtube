import React, { createContext } from "react";

const MovieContext = createContext();

export const Movie = ({children}) => {
  return <MovieContext.Provider value={'hey'}>
      {children}
  </MovieContext.Provider>;
};

export default Movie;
