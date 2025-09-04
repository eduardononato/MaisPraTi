import React from 'react';

const MovieCard = ({ movie, onViewDetails, onToggleFavorite, isFavorite }) => {
  return (
    <div className="movie-card">
      <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x450?text=No+Image'} alt={`${movie.Title} Poster`} className="movie-poster" />
      <div className="movie-info">
        <h3 className="movie-title">{movie.Title}</h3>
        <p className="movie-year">Ano: {movie.Year}</p>
      </div>
      <div className="movie-actions">
        <button onClick={() => onViewDetails(movie.imdbID)} className="details-button">Ver Detalhes</button>
        <button onClick={() => onToggleFavorite(movie)} className="favorite-button">
          {isFavorite ? 'Remover dos Favoritos' : 'Adicionar aos Favoritos'}
        </button>
      </div>
    </div>
  );
};

export default MovieCard;