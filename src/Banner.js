import React, { useState, useEffect } from 'react';
import axios from './axios';
import requests from './request';
import './Banner.css'; // Import CSS file for Banner styles

function Banner() {
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const request = await axios.get(requests.fetchDocumentaries);
                const randomIndex = Math.floor(Math.random() * request.data.results.length);
                setMovie(request.data.results[randomIndex]);
            } catch (error) {
                console.error('Error fetching Netflix originals:', error);
            }
        }
        fetchData();
    }, []);

    return (
        <header
            className="banner"
            style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`, // Corrected URL with proper string interpolation
            }}
        >
            <div className="banner__contents">
                <h1 className="banner__title">{movie?.name || movie?.title}</h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <h1 className="banner__description">{movie?.overview}</h1>
            </div>
            <div className='banner--fadebottom' />
              
        </header>
    );
}

export default Banner;



