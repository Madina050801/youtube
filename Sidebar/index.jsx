import React, { useReducer } from "react";
import { Container } from "./style";

export const Sidebar = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "pilus":
        return state + 1;
      case "minus":
        return state - 1;
      default:
        return state;
    }
  };
  const [value, dispatch] = useReducer(reducer, 0);

  return (
    <Container>
      <h1>Sidebar {value}</h1>
      <div>
        <button onClick={() => dispatch({ type: "pilus" })}>+</button>
        <button onClick={() => dispatch({ type: "minus" })}>-</button>
      </div>
    </Container>
  );
};

export default Sidebar;
