import React, {useState} from 'react';
import MovieListHeading from './MovieListHeading';
import 'bootstrap/dist/css/bootstrap.min.css';

const VoucherList = ({movies}) => {
    let randomize = require('randomatic');
	if(movies){
	return (
		<>{movies.map((movie, index) => (
				<div key={index} className='image-container d-flex justify-content-start m-3'>
					<img src={movie.Poster} alt='voucher'/>
                    <li>
                     <h1>REDUCERE {randomize('0', 2,)}%</h1>
                    <h2>Title:  {movie.Title}</h2>
                    <h2>Year:  {movie.Year}</h2>  
                    <h2>Cod reducere: {randomize('A0', 20)}</h2>
                    </li>
                    
                    
				</div>

				
			))} 
			</>
		
	)} else {
		return <></>
	}
};

export const Vouchers = () => {
    const [movies, setMovies] = useState([]);
    
    const getMovieRequest = async () => {
        let searchValue = 'titan';
        const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=263d22d8`;
    
        const response = await fetch(url);
    
        const responseJson = await response.json();
    
        if (responseJson.Search) {
            setMovies(responseJson.Search);
        }
    };

    
    return (

        <div className='container-fluid movie-app'>
            <div className='row d-flex align-items-center mt-4 mb-4'>
                <MovieListHeading heading='Vouchers' />
                
            </div>
            <button  onClick={() =>getMovieRequest()}>Get Vouchers</button >
            <div className='row'>
                <VoucherList movies={movies} />
		    </div>
        </div>
);
 }