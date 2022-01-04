import React from "react";
import Movie from "./movie";
import Users from "./users";

export const Context = ({ children }) => {
  return (
    <Movie>
      <Users>{children}</Users>
    </Movie>
  );
};

export default Context;