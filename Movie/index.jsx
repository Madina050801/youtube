import React, { createContext, useContext } from "react";
import { Container } from "./style";
import { MovieContext } from "../../context/movie";

export const Movie = () => {
  const [state, setState] = useContext(MovieContext);

  const onDelete = (id) => {
    let res = state.filter((vl) => vl.id != id);
    setState(res);
  };
  return (
    <Container>
      <h1>Movie</h1>
      {state.map((value) => {
        return (
          <>
            <h1>
              {value.id} {value.title}
            </h1>
            <h3>
              {value.desc}{" "}{value.category}
              <button onClick={() => onDelete(value.id)}>delete</button>
            </h3>
          </>
        );
      })}
    </Container>
  );
};

export default Movie;
