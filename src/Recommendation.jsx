import React, { useState, useContext, useEffect } from "react";
import { MovieContext, ErrorContext } from "./context";
import errors from "./errors";
import { fetchRecommendation, convertImdbIdtoId } from "./service";
import unavailablePic from "./unavailable.jpg";

const Recommendation = () => {
  const [ movieState, setMovieState] = useContext(MovieContext);
  const [recommendationList, setRecommendationList] = useState([]);
  const [setError] = useContext(ErrorContext);

  useEffect(() => {
    if (movieState.id) {
      getRecommendation(movieState.id);
      setError("");
    } else {
      convertImdbIdtoId(movieState.imdbID)
        .then((json) => {
          const id = json.movie_results[0].id;
          getRecommendation(id);
        })
        .catch((err) => {
          setError(errors[err.error || "DEFAULT"]);
        });
    }
  }, [movieState.imdbID, movieState.id]);

  const getRecommendation = (id) => {
    return fetchRecommendation(id)
      .then((json) => {
        setRecommendationList(json.results.slice(0, 3));
        setError("");
      })
      .catch((err) => {
        setError(errors[err.error || "DEFAULT"]);
      });;
  };
  const searchById = (id) => {
    setMovieState({ ...movieState, id: id });
  };

  const imgURL = "https://image.tmdb.org/t/p/w500/";
  const recommendationArray = recommendationList.map((movie) => {
    let introduction;
    if (movie.poster_path) {
      introduction = (
        <img
          src={imgURL + movie.poster_path}
          className="clickable"
          onClick={() => searchById(movie.id)}
          alt="poster"
        />
      );
    } else {
      introduction = (
        <img
          src={unavailablePic}
          alt="poster unavailable"
          className="clickable"
          onClick={() => searchById(movie.id)}
        />
      );
    }
    return (
      <li key={recommendationList.indexOf(movie)}>
        <p className="clickable" onClick={() => searchById(movie.id)}>
          {movie.title}
        </p>
        <p className="time"> {movie.release_date} </p>
        <p className="rating"> Rating: {movie.vote_average} </p>
        {introduction}
        <p>
          <button onClick={() => searchById(movie.id)}> details</button>
        </p>
      </li>
    );
  });

  return (
    <div>
      <h2>
        Recommendation according to <span className="highlight-title">{movieState.Title}</span>
      </h2>
      <ul className="recommendation">{recommendationArray}</ul>
    </div>
  );
};

export default Recommendation;
