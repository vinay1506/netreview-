import React, { useState, useEffect } from 'react';
import './App.css';
import requests from './requests';

const API_KEY = "68ab438d97adfa94cb0ed088d061440b";

// Navbar Component
const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`nav ${isScrolled ? 'scrolled' : ''}`}>
      <img
        className="nav__logo"
        src="https://www.freepnglogos.com/uploads/netflix-logo-drawing-png-19.png"
        alt="Netflix Logo"
      />
      <div className="nav__links">
        <a href="https://netplayz.ru/" className="nav__link">Home</a>
        <a href="https://netplayz.ru/" className="nav__link">Series</a>
        <a href="https://netplayz.ru/" className="nav__link">Movies</a>
        <a href="https://netplayz.ru/" className="nav__link">History</a>
      </div>
      <img
        className="nav__avatar"
        src="/image.png"
        alt="Avatar"
      />
    </div>
  );
};

// Banner Component
const Banner = () => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(requests.fetchNetflixOriginals);
        const data = await response.json();
        setMovie(data.results[Math.floor(Math.random() * data.results.length)]);
      } catch (error) {
        console.error('Error fetching banner data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }}
    >
      {movie ? (
        <div className="banner__contents">
          <h1 className="banner__title">{movie.title || movie.name}</h1>
          <div className="banner__buttons">
            <button className="banner__button">Play</button>
            <button className="banner__button">More info</button>
          </div>
          <h2 className="banner__description">
            {movie.overview || 'No description available for this movie.'}
          </h2>
        </div>
      ) : (
        <div className="banner__loading">Loading...</div>
      )}
      <div className="banner__fadeBottom"></div>
    </header>
  );
};

// Row Component
const Row = ({ title, fetchUrl, isLargeRow = false }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(fetchUrl);
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error(`Error fetching ${title} data:`, error);
      }
    };

    fetchMovies();
  }, [fetchUrl, title]);

  const handleMovieClick = async (movie) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${API_KEY}&language=en-US`
      );
      const data = await response.json();
      const trailer = data.results.find((vid) => vid.type === 'Trailer');
      if (trailer) {
        setTrailerUrl(`https://www.youtube.com/embed/${trailer.key}?autoplay=1`);
        setIsModalOpen(true);
      }
    } catch (error) {
      console.error('Error fetching trailer:', error);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTrailerUrl('');
  };

  return (
    <div className="row">
      <h2 className="row__title">{title}</h2>
      {isModalOpen && (
        <div className="modal">
          <div className="modal__content">
            <button className="modal__close" onClick={closeModal}>
              ---Back---
            </button>
            <iframe
              width="100%"
              height="700"
              src={trailerUrl}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Trailer"
            ></iframe>
          </div>
        </div>
      )}
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title || movie.name}
            onClick={() => handleMovieClick(movie)}
          />
        ))}
      </div>
    </div>
  );
};

// Login Component
const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      onLogin();
    } else {
      alert('Please enter valid credentials.');
    }
  };

  return (
    
    <div className="login">
     
      <form className="login__form" onSubmit={handleLogin}>
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

// App Component
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      {!isLoggedIn ? (
        <Login onLogin={() => setIsLoggedIn(true)} />
      ) : (
        <>
          <Nav />
          <Banner />
          <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
          <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
          <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
          <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
          <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
          <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
          <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
          <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
        </>
      )}
    </div>
  );
};

export default App;
