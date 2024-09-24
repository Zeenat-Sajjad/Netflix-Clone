import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa'; 
import { FavoritesContext } from '../FavoritesContext/FavoritesContext'; // Import context

const TitleCards = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);
  const { favorites, toggleFavorite } = useContext(FavoritesContext); // Use context

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYTg2OGQ2YzQ0N2MwOWZiZWIzNTQ4YmUwYzAxYzBmNiIsIm5iZiI6MTcyNjY3NDcxOS40OTg0NzYsInN1YiI6IjY2ZWFlZmRhNTE2OGE4OTZlMTFmNzRiZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.C8lsB0VjskwoeC4WQy-_o8uT2dZ7vx2180x1_p1nWaE'
    }
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${category ? category : "now_playing"}?language=en-US&page=1`, options)
      .then((response) => response.json())
      .then((response) => setApiData(response.results))
      .catch((err) => console.error(err));
  }, [category]);

  return (
    <div className='mt-[50px] mb-[30px]'>
      <h2 className='mb-[8px] text-white text-lg'>{title ? title : 'Popular on Netflix'}</h2>

      <div className='flex gap-[10px] overflow-x-auto scrollbar scrollbar-thumb-black scrollbar-track-gray-800'
           style={{ scrollBehavior: 'smooth', paddingBottom: '10px' }}>
        {apiData.map((card, index) => {
          const isFavorite = favorites.includes(card.id);
          return (
            <div className='relative shrink-0' key={index} style={{ width: '300px' }}>
              <Link to={`/player/${card.id}`} className='relative'>
                <img
                  src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`}
                  alt={card.name}
                  className='w-full h-[170px] object-cover rounded-[4px] cursor-pointer'
                />
                <div className='absolute bottom-0 left-0 right-0 p-2 mask-gradient'>
                  <p className='ml-[180px] text-white'>{card.original_title}</p>
                </div>
              </Link>

              <FaHeart
                onClick={() => toggleFavorite(card.id)}
                className={`absolute top-2 right-2 text-[24px] cursor-pointer 
                  ${isFavorite ? 'text-red-500' : 'text-white'}`} 
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCards;









