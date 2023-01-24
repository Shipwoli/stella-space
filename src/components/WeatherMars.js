import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const  WeatherMars= () => {
    const [weatherData, setWeatherData] = useState({});


  useEffect(() => {
    fetch('https://api.nasa.gov/insight_weather/?api_key={e9nvtlCBUdQgghFkPqS8y00lMrXFF2wbNpjwMSTG}&feedtype=json&ver=1.0')
      .then(response => response.json())
      .then(data => setWeatherData(data));
  }, []);

  return (
    <BrowserRouter>
    <Routes>
        <Route path="/weathermars" component={WeatherMars} >
    <div>
      <h2>Weather on Planet Mars</h2>
      <p>Temperature: {weatherData.AT && weatherData.AT.av}</p>
      <p>Speed of Wind: {weatherData.HWS && weatherData.HWS.av}</p>
    </div>
    </Route>
    </Routes>
    </BrowserRouter>
  );

}

export default WeatherMars;