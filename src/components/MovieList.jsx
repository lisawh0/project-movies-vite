import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./movielist.css";

function MovieList() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const apiKey = '113ea8a560a67d49a46e9d4001651148';
        const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;

        fetch(apiUrl)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                setMovies(data.results);
            })
            .catch((error) => {
                console.error('Error fetching popular movies:', error);
            });
    }, []);

    return (
        <div className='movielist'>

            {movies.map((movie) => (
                <li key={movie.id}>

                    <Link to="/MovieCard"><img
                        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                        alt={movie.title}
                    /></Link>

                </li>

            ))}

        </div>
    );
}

export { MovieList };
