
import React, { useState, useEffect } from 'react';
function MarsWeather() {
  const [weatherData, setWeatherData] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://api.nasa.gov/insight_weather/?api_key=h14aKNTMgeEqclkSY2yFEFYUKHSji7fjLaTN60F3&feedtype=json&ver=1.0');
      const data = await response.json();
      setWeatherData(data);
    }
    fetchData();
  }, []);
  if (!weatherData) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h2>Weather on Mars</h2>
      <p>Temperature: {weatherData.temperature}</p>
      <p>Wind Speed: {weatherData.wind_speed}</p>
      <p>Wind Direction: {weatherData.wind_direction}</p>
    </div>
  );
}
export default MarsWeather;