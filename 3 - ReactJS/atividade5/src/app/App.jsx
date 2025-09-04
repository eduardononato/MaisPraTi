import React, { useState, useEffect } from 'react';
import Header from '../shared/ui/Header';
import SearchPage from '../pages/search/searchMoviePage';
import MovieDetailPage from '../pages/movieDetails/MovieDetailPage';
import FavoritesPage from '../pages/favoritesMovie/FavoritesPage';
import { loadFromLocalStorage, saveToLocalStorage } from '../shared/lib/localStorage';
import './index.css';

function App() {
  const [currentPage, setCurrentPage] = useState('search');
  const [currentMovieId, setCurrentMovieId] = useState(null);

  const initialFavorites = [ ];
  const [favorites, setFavorites] = useState(() =>
    loadFromLocalStorage('omdb_favorites', initialFavorites)
  );

  useEffect(() => {
    saveToLocalStorage('omdb_favorites', favorites);
  }, [favorites]);

  const toggleFavorite = (movie) => {
    const isFavorite = favorites.some(fav => fav.imdbID === movie.imdbID);
    if (isFavorite) {
      setFavorites(favorites.filter(fav => fav.imdbID !== movie.imdbID));
    } else {
      setFavorites([...favorites, movie]);
    }
  };

  const isMovieFavorite = (id) => {
    return favorites.some(fav => fav.imdbID === id);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'search':
        return <SearchPage onViewDetails={setCurrentMovieIdAndPage} onToggleFavorite={toggleFavorite} isMovieFavorite={isMovieFavorite} />;
      case 'details':
        return <MovieDetailPage movieId={currentMovieId} onBack={() => setCurrentPage('search')} onToggleFavorite={toggleFavorite} isMovieFavorite={isMovieFavorite} />;
      case 'favorites':
        return <FavoritesPage favorites={favorites} onViewDetails={setCurrentMovieIdAndPage} onToggleFavorite={toggleFavorite} isMovieFavorite={isMovieFavorite} />;
      default:
        return null;
    }
  };

  const setCurrentMovieIdAndPage = (id) => {
    setCurrentMovieId(id);
    setCurrentPage('details');
  };

  return (
    <div className="app-container">
      <Header onNavigate={setCurrentPage} />
      <main className="main-content">
        {renderPage()}
      </main>
    </div>
  );
}

export default App;