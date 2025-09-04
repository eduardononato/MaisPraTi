import React from 'react';
import { useMovieDetail } from '../../entities/movie/model/MovieModel';

const MovieDetailPage = ({ movieId, onBack, onToggleFavorite, isMovieFavorite }) => {
  const { movie, loading, error } = useMovieDetail(movieId);

  if (loading) return <div className="loading-message">Carregando detalhes...</div>;
  if (error) return <div className="error-message">Erro: {error}</div>;
  if (!movie) return null;

  return (
    <div className="movie-detail-container">
      <button onClick={onBack} className="back-button">Voltar</button>
      <div className="movie-detail">
        <div className="movie-detail-header">
          <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x450?text=No+Image'} alt={`${movie.Title} Poster`} className="detail-poster" />
          <div className="movie-detail-info">
            <h1 className="detail-title">{movie.Title} ({movie.Year})</h1>
            <p><strong>Gênero:</strong> {movie.Genre}</p>
            <p><strong>Diretor:</strong> {movie.Director}</p>
            <p><strong>Elenco:</strong> {movie.Actors}</p>
            <p><strong>Duração:</strong> {movie.Runtime}</p>
            <p><strong>Lançamento:</strong> {movie.Released}</p>
            <p><strong>Classificação:</strong> {movie.Rated}</p>
            <button onClick={() => onToggleFavorite(movie)} className="favorite-button">
              {isMovieFavorite(movie.imdbID) ? 'Remover dos Favoritos' : 'Adicionar aos Favoritos'}
            </button>
          </div>
        </div>
        <div className="movie-detail-plot">
          <h2>Sinopse</h2>
          <p>{movie.Plot}</p>
        </div>
        {movie.Ratings && movie.Ratings.length > 0 && (
          <div className="movie-detail-ratings">
            <h2>Avaliações</h2>
            <ul>
              {movie.Ratings.map((rating, index) => (
                <li key={index}><strong>{rating.Source}:</strong> {rating.Value}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
export default MovieDetailPage;