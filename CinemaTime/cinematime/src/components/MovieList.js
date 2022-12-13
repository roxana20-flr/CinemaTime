import React, {useState, useEffect} from 'react';
import MovieListHeading from './MovieListHeading';
import SearchBox from './SearchBox';
import AddToFavourites from './AddToFavourites';
import RemoveFavourites from './RemoveFavourites';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate } from "react-router-dom"

const MovieList = ({movies, handleFavouritesClick, favouriteComponent}) => {

	const FavouriteComponent = favouriteComponent;
	if(movies){
	return (
		<>
		
		{movies.map((movie, index) => (
			<li key={index}>
				<div className='image-container d-flex justify-content-start m-3'>
					<img src={movie.Poster} alt='movie'></img>
					<div
						onClick={() => handleFavouritesClick(movie)}
						className='overlay d-flex align-items-center justify-content-center'
					>
						<FavouriteComponent />
					</div>
				</div>
			</li>
				
			))} 
			</>
		
	)} else {
		return <></>
	}
};

export const Movies = () => { 
const [movies, setMovies] = useState([]);
const [favourites, setFavourites] = useState([]);
const [searchValue, setSearchValue] = useState('');
let navigate = useNavigate();
const goTo  = () => {
	navigate("/vouchers")
}

const getMovieRequest = async (searchValue) => {
	const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=263d22d8`;

	const response = await fetch(url);

	const responseJson = await response.json();

	if (responseJson.Search) {
		setMovies(responseJson.Search);
	}
};

useEffect(() => {
	getMovieRequest(searchValue);
}, [searchValue]);

useEffect(() => {
	const movieFavourites = JSON.parse(
		localStorage.getItem('react-movie-app-favourites')
	);

	setFavourites(movieFavourites);
}, []);

const saveToLocalStorage = (items) => {
	localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
};

const addFavouriteMovie = (movie) => {
	let favor = favourites;
	let newFavouriteList;
	if(favor) {
		 newFavouriteList = [favor, movie];
	} else {
		newFavouriteList = [movie];
	}
	
	setFavourites(newFavouriteList);
	saveToLocalStorage(newFavouriteList);
};

const removeFavouriteMovie = (movie) => {
	const newFavouriteList = favourites.filter(
		(favourite) => favourite.imdbID !== movie.imdbID
	);

	setFavourites(newFavouriteList);
	saveToLocalStorage(newFavouriteList);
};

return (
	<div className='container-fluid movie-app'>
		<div className='row d-flex align-items-center mt-4 mb-4'>
			<MovieListHeading heading= 'Movies'/>
			<SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
		</div>
		<div className='row'>
			<MovieList
				movies={movies}
				handleFavouritesClick={addFavouriteMovie}
				favouriteComponent={AddToFavourites}
			/>
		</div>
		<div className='row d-flex align-items-center mt-4 mb-4'>
			<MovieListHeading heading='Favourites' />
		</div>
		<div className='row'>
			<MovieList
				movies={favourites}
				handleFavouritesClick={removeFavouriteMovie}
				favouriteComponent={RemoveFavourites}
			/>
		</div>
	</div>
);
};