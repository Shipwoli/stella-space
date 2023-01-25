import React, { useState, useEffect } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

function MapAsteroids() {
    const [asteroids, setAsteroids] = useState([]);
    useEffect(() => {
    
        fetch("https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=e9nvtlCBUdQgghFkPqS8y00lMrXFF2wbNpjwMSTG")
        .then(res => setAsteroids(res.data.near_earth_objects))
        .catch(err => console.log(err));
    }, []);
  
  return (
    // <BrowserRouter>
    // <Routes>
    // <Route>
      <div>
        <h1>Map of Asteroids</h1>
        {asteroids.map(asteroid => (
          <div key={asteroid.id}>
            <p>Name: {asteroid.name}</p>
            <p>Diameter: {asteroid.estimated_diameter.kilometers.estimated_diameter_min} - {asteroid.estimated_diameter.kilometers.estimated_diameter_max} km</p>
          </div>
        ))}
      </div>
      // </Route>
      // </Routes>
      // </BrowserRouter>
    );
  }

  export default MapAsteroids;