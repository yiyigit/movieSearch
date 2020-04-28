import React, { useContext } from "react";
import { MovieContext } from "./context";

const HomepageBtn = () => {
  const [movieState, setMovieState] = useContext(MovieContext);
  return (
    <button className="header-btn"
      onClick={() => {
        setMovieState({});
      }}
    >
      return to homepage
    </button>
  );
};

export default HomepageBtn;
