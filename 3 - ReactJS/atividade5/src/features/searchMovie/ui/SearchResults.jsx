import React from 'react';
import MovieCard from '../../../entities/movie/ui/MovieCard';
import Pagination from '../../../shared/ui/Pagination';

const SearchResults = ({ searchResults, totalResults, page, onPageChange, ...props }) => {
  return (
    <div className="results-container">
      <h2 className="results-title">Resultados da Busca</h2>
      <div className="movie-list">
        {searchResults.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            movie={movie}
            onViewDetails={props.onViewDetails}
            onToggleFavorite={props.onToggleFavorite}
            isFavorite={props.isMovieFavorite(movie.imdbID)}
          />
        ))}
      </div>
      <Pagination
        totalResults={totalResults}
        page={page}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default SearchResults;