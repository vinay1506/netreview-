import React, { useEffect, useState } from 'react';
import axios from './axios';
import YouTube from 'react-youtube';
import './Row.css';

function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState('');
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(fetchUrl);
                if (response.data.results) {
                    setMovies(response.data.results);
                } else {
                    setError('No data available.');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
                setError('Error fetching data. Please try again later.');
            }
        };

        fetchData();
    }, [fetchUrl]);

    const fetchTrailer = async (movieId, isTV) => {
        try {
            const response = await axios.get(`/${isTV ? 'tv' : 'movie'}/${movieId}/videos?api_key=68ab438d97adfa94cb0ed088d061440b`);
            const videos = response.data.results;
            const trailer = videos.find(video => video.type === 'Trailer' && video.site === 'YouTube');
            if (trailer) {
                setTrailerUrl(trailer.key);
            } else {
                setError('No trailer found for this movie or TV show.');
            }
        } catch (error) {
            console.error('Error fetching trailer:', error);
            setError('Error fetching trailer. Please try again later.');
        }
    };

    const handleClick = (movieId, isTV) => {
        fetchTrailer(movieId, isTV);
    };

    return (
        <div>
            <h2 className="row__title">{title}</h2>
            {error && <p className="row__error">{error}</p>}
            {trailerUrl && (
                <div className="modal">
                    <button className="closeButton" onClick={() => setTrailerUrl('')}>CLOSE</button>
                    <YouTube videoId={trailerUrl} opts={{ width: '100%', height: '500px', playerVars: { autoplay: 1 } }} />
                </div>
            )}
            <div className="row__posters">
                {movies.length > 0 && movies.map((movie) => (
                    <img
                        key={movie.id}
                        className={`row__poster ${isLargeRow ? "row__poster--large" : ""}`}
                        src={`https://image.tmdb.org/t/p/w500/${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                        alt={movie.name}
                        onClick={() => handleClick(movie.id, !!movie.first_air_date)}
                    />
                ))}
            </div>
        </div>
    );
}

export default Row;