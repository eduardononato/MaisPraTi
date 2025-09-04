import React from 'react';
import MovieCard from '../../entities/movie/ui/MovieCard';

const FavoritesPage = ({ favorites, onToggleFavorite, onViewDetails, isMovieFavorite }) => {
  return (
    <div className="favorites-list-container">
      <h1 className="favorites-title">Meus Filmes Favoritos</h1>
      {favorites.length === 0 ? (
        <p className="no-favorites-message">Você ainda não tem filmes favoritos.</p>
      ) : (
        <div className="movie-list">
          {favorites.map(movie => (
            <MovieCard
              key={movie.imdbID}
              movie={movie}
              onViewDetails={onViewDetails}
              onToggleFavorite={onToggleFavorite}
              isFavorite={isMovieFavorite(movie.imdbID)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;