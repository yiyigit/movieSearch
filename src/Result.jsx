import React, { useContext, useState, useEffect } from "react";
import { MovieContext, ErrorContext } from "./context";
import errors from "./errors";
import Recommendation from "./Recommendation";
import {
  fetchDetail,
  convertImdbIdtoId,
  fetchCommentsFromServer,
  sendCommentToServer,
  deleteCommentInServer,
} from "./service";
import unavailablePic from "./unavailable.jpg";

const Result = () => {
  const [movieState, setMovieState] = useContext(MovieContext);
  const [setError] = useContext(ErrorContext);
  const [comment, setComment] = useState("");
  const [myComment, setMyComment] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    if (movieState.id) {
      setComment("");
      getDetail(movieState.id);
    } else {
      convertImdbIdtoId(movieState.imdbID)
        .then((json) => {
          if (json.movie_results.length === 0) {
            throw new Error("LACK_KEYWORD");
          } else {
            const id = json.movie_results[0].id;
            setMovieState({ ...movieState, id: id });
            setComment("");
            setError("");
          }
        })
        .catch((err) => {
          setError(errors[err.error || err.message || "DEFAULT"]);
        });
    }
  }, [movieState.id, movieState.imdbID]);

  const getDetail = (id) => {
    const imgURL = "https://image.tmdb.org/t/p/w500/";
    return fetchDetail(id)
      .then((json) => {
        setMovieState({
          Title: json.title,
          Year: json.release_date,
          imdbID: json.imdb_id,
          id: json.id,
          overview: json.overview,
          PosterUrl: imgURL + json.poster_path,
        });
        fetchCommentsFromServer(json.id).then((json) => {
          setMyComment(json.comment);
        });

        setError("");
      })
      .catch((err) => {
        setError(errors[err.error || err || "DEFAULT"]);
      });
  };

  const handleInput = (e) => {
    setComment(e.target.value);
  };
  const sendComment = (e) => {
    e.preventDefault();
    sendCommentToServer(movieState.id, comment)
      .then((json) => {
        setMyComment(json.comment);
        setComment("");
      })
      .catch((err) => {
        setError(errors[err.error || err || "DEFAULT"]);
      });
  };

  const deleteComment = () => {
    deleteCommentInServer(movieState.id)
      .then((json) => {
        setMyComment("");
      })
      .catch((err) => {
        setError(errors[err.error || err || "DEFAULT"]);
      });
  };
  let result_poster;
  {
    if (
      !movieState.PosterUrl ||
      movieState.PosterUrl === "https://image.tmdb.org/t/p/w500/N/A"
    ) {
      result_poster = <img src={unavailablePic} alt="poster unavailable" />;
    } else {
      result_poster = <img src={movieState.PosterUrl} alt="poster" />;
    }
  }

  return (
    <div className="container">
      <div className="flex-box">
        <div className="result-detail">
          <p className="title"> Title: {movieState.Title} </p>
          <p className="time"> Year: {movieState.Year} </p>
          <p className="overview">
            {" "}
            Overview: {movieState.overview || "Not Available"}
          </p>
          <p>My comment:{myComment}</p>{" "}
          <button onClick={deleteComment} disabled={!myComment}>
            delete
          </button>
          <form onSubmit={(e) => sendComment(e)}>
            <label>
              New Comment:
              <input value={comment} onChange={(e) => handleInput(e)}></input>
            </label>
            <button type="submit">add/update</button>
          </form>
        </div>
        <div className="img-detail">{result_poster}</div>
      </div>

      <Recommendation />
    </div>
  );
};

export default Result;
