import React, { useState, useEffect } from 'react';

const NASA_API_KEY = 'h14aKNTMgeEqclkSY2yFEFYUKHSji7fjLaTN60F3';

const MapAsteroids = () => {
  const [asteroids, setAsteroids] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=${NASA_API_KEY}`);
      const data = await response.json();
      setAsteroids(data.near_earth_objects);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Map of Asteroids</h1>
      <ul>
        {asteroids.map((asteroid) => (
          <li key={asteroid.id} className="map">{asteroid.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default MapAsteroids;
