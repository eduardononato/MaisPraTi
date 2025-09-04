import React, { useState } from 'react';
import SearchForm from '../../features/searchMovie/ui/SearchForm';
import SearchResults from '../../features/searchMovie/ui/SearchResults';
import { searchMovies } from '../../shared/api/omdbApi';

const SearchPage = ({ onViewDetails, onToggleFavorite, isMovieFavorite }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [totalResults, setTotalResults] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (query, pageNumber = 1) => {
    setLoading(true);
    setError(null);
    setSearchQuery(query);
    const data = await searchMovies(query, pageNumber);
    if (data.Response === 'True') {
      setSearchResults(data.Search);
      setTotalResults(parseInt(data.totalResults));
      setPage(pageNumber);
    } else {
      setSearchResults([]);
      setTotalResults(0);
      setError(data.Error);
    }
    setLoading(false);
  };

  return (
    <div className="search-page">
      <SearchForm onSearch={(query) => handleSearch(query)} loading={loading} />

      {loading && <div className="loading-message">Carregando resultados...</div>}
      {error && <div className="error-message">Erro: {error}</div>}

      {searchResults && searchResults.length > 0 && (
        <SearchResults
          searchResults={searchResults}
          totalResults={totalResults}
          page={page}
          onPageChange={(p) => handleSearch(searchQuery, p)}
          onViewDetails={onViewDetails}
          onToggleFavorite={onToggleFavorite}
          isMovieFavorite={isMovieFavorite}
        />
      )}
    </div>
  );
  };
export default SearchPage;