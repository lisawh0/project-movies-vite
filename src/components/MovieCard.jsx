import React from 'react';
import { Link } from 'react-router-dom';
import "./movielist.css";

function MovieCard({ movie }) {
    return (
        <div className="movie-card">
            <Link to={`/Details/${movie.id}`}> {/* Dynamic link with movie ID */}
                <img
                    src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
                    alt={movie.title}
                />
                <div className="movie-title">{movie.title}</div>
            </Link>
        </div>
    );
}

export default MovieCard;
