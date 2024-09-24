import React, { useEffect, useState } from 'react';
import back_arrow_icon from '../../assets/netflix_react_assets/assets/back_arrow_icon.png';
import { useNavigate, useParams } from 'react-router-dom';

const Player = () => {
  const { id } = useParams();
  const navigate = useNavigate(); 

  const [apiData, setApiData] = useState({
    name: '',
    key: '',
    published_at: '',
    type: '',
  });

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYTg2OGQ2YzQ0N2MwOWZiZWIzNTQ4YmUwYzAxYzBmNiIsIm5iZiI6MTcyNjY3NDcxOS40OTg0NzYsInN1YiI6IjY2ZWFlZmRhNTE2OGE4OTZlMTFmNzRiZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.C8lsB0VjskwoeC4WQy-_o8uT2dZ7vx2180x1_p1nWaE'
    }
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then((response) => response.json())
      .then((response) => {
        if (response.results && response.results.length > 0) {
          setApiData(response.results[0]);
        }
      })
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <div className='player bg-black text-white h-[100vh] flex flex-col items-center justify-center'>
      <img
        src={back_arrow_icon}
        alt="Back"
        className='absolute top-[20px] left-[20px] w-[50px] cursor-pointer'
        onClick={() => navigate(-1)} 
      />
      {apiData.key ? (
        <>
          <iframe
            width='90%'
            height='90%'
            src={`https://www.youtube.com/embed/${apiData.key}`}
            className='rounded-[10px]'
            title='trailer'
            frameBorder='0'
            allowFullScreen
          ></iframe>
          <div className="player-info flex items-center w-[90%] justify-between mt-4">
            <p>{apiData.published_at ? apiData.published_at.slice(0, 10) : 'Unknown Date'}</p>
            <p>{apiData.name || 'Unknown Name'}</p>
            <p>{apiData.type || 'Unknown Type'}</p>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Player;


