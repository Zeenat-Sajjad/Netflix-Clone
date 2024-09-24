import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FavoritesContext } from '../../components/FavoritesContext/FavoritesContext';

const FavoritesPage = () => {
  const { favorites } = useContext(FavoritesContext);
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true); // For showing loading state
  const [error, setError] = useState(null); // For showing error message

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const promises = favorites.map((id) =>
          fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer YOUR_ACCESS_TOKEN', // Replace with your actual TMDb token
            },
          }).then((res) => {
            if (!res.ok) {
              throw new Error('Failed to fetch movie data');
            }
            return res.json();
          })
        );
        const results = await Promise.all(promises);
        setApiData(results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFavorites();
  }, [favorites]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='mt-[50px]'>
      <h2 className='text-white text-lg mb-[20px]'>Your Favorite Movies</h2>
      <div className='flex flex-wrap gap-[10px]'>
        {apiData.map((movie) => (
          <div className='relative w-[300px] shrink-0' key={movie.id}>
            <Link to={`/player/${movie.id}`} className='relative'>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              <h3 className='text-white'>{movie.title}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;


