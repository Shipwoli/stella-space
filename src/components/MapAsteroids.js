import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

function MapAsteroids() {
    const [asteroids, setAsteroids] = useState([]);
    useEffect(() => {
      axios
        .get("https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=e9nvtlCBUdQgghFkPqS8y00lMrXFF2wbNpjwMSTG")
        .then(res => setAsteroids(res.data.near_earth_objects))
        .catch(err => console.log(err));
    }, []);
  
  return (
    <Router>
    <Route>
      <div>
        <h1>Map of Asteroids</h1>
        {asteroids.map(asteroid => (
          <div key={asteroid.id}>
            <p>Name: {asteroid.name}</p>
            <p>Diameter: {asteroid.estimated_diameter.kilometers.estimated_diameter_min} - {asteroid.estimated_diameter.kilometers.estimated_diameter_max} km</p>
          </div>
        ))}
      </div>
      </Route>
      </Router>
    );
  }

  export default MapAsteroids;