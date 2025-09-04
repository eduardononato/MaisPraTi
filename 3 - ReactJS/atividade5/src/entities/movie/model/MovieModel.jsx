import { useState, useEffect } from 'react';
import { getMovieById } from '../../../shared/api/omdbApi';

export const useMovieDetail = (movieId) => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      if (!movieId) return;
      setLoading(true);
      setError(null);
      try {
        const data = await getMovieById(movieId);
        if (data.Response === 'True') {
          setMovie(data);
        } else {
          setError(data.Error);
        }
      } catch (err) {
        setError('Falha ao carregar detalhes do filme.');
      } finally {
        setLoading(false);
      }
    };
    fetchMovie();
  }, [movieId]);

  return { movie, loading, error };
};