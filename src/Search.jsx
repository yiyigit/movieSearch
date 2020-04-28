import React, { useContext } from "react";
import { MovieContext, ErrorContext } from "./context";
import TopRated from "./TopRated";
import errors from "./errors";
import Result from "./Result";
import { fetchOMDB } from "./service";

const Search = () => {
  const [movieState, setMovieState] = useContext(MovieContext);
  const [setError] = useContext(ErrorContext);

  const searchOmdb = (e) => {
    e.preventDefault()
    fetchOMDB(movieState.keyword)
      .then((json) => {
        if (json.Error) {
          throw new Error("MOVIE_NOT_FOUND");
        } else {
          setMovieState({
            imdbID: json.Search[0].imdbID,
            Title: json.Search[0].Title,
            Year: json.Search[0].Year,
          });
        }
      })
      .catch((err) => {
        setError(errors[err.error || err.message || "DEFAULT"]);
        setMovieState({});
      });
  };

  const handleChange = (e) => {
    setMovieState({ ...movieState, keyword: e.target.value });
  };

  let result;
  if (movieState.imdbID || movieState.id) {
    result = <Result />;
  } else {
    result = <TopRated />;
  }
  console.log(movieState);
  return (
    <div>
      <form onSubmit={(e)=>searchOmdb(e)} className="search-panel">
        <input
          type="text"
          value={movieState.keyword || ""}
          placeholder="Search..."
          onChange={(e) => handleChange(e)}
        />
        <button type="submit" disabled={!movieState.keyword}>
          {" "}
          Search{" "}
        </button>
      </form>
      {result}
    </div>
  );
};
export default Search;
