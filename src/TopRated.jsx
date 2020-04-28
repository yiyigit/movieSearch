import React, {useState, useEffect, useContext} from 'react';
import { MovieContext, ErrorContext } from './context';
import errors from "./errors";
import {fetchTopRated} from './service';

const TopRated = () =>{
	const [topArray, setTopArray] = useState([]);
	const [movieState, setMovieState] = useContext(MovieContext);
	const [setError] = useContext(ErrorContext);
	
	useEffect(() =>{
		fetchTopRated()
      .then((json) => {
        setTopArray(json.results.slice(0, 4));
      })
      .catch((err) => {
        setError(errors[err.message || "DEFAULT"]);
      });
	} , [])
	
	const searchById =(id)=>{
		setMovieState({...movieState, id:id});
	}
	const imgURL = "https://image.tmdb.org/t/p/w500/";
	
	const movieArray = topArray.map((movie)=>{	
	return (
		<li key={topArray.indexOf(movie)} className="top-movie">
			<img src= {imgURL + movie.poster_path}  className="clickable" onClick ={() => searchById(movie.id)} alt='poster'/> 
			<p className="clickable" onClick ={() => searchById(movie.id)}> {movie.title} </p>
			<p className="time"> {movie.release_date} </p>
			<p className="rating"> Rating: {movie.vote_average} </p>
			<button onClick ={() => searchById(movie.id)}> details</button>
		</li>)
	});


	return (
		<div>
			<h2> Top Rated Movies: </h2>
			<ol className="top-rated-movies">
			{movieArray}
			</ol>
		</div>)
}

export default TopRated;