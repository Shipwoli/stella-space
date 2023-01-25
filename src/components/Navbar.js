import React from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/nasa-picture" >Nasa Picture of the Day</Link>
        </li>
        <li>
          <Link to="/weather-mars">Weather on Planet Mars</Link>
        </li>
        <li>
            <Link to="/mars-photos">Mars Rover Photos</Link>
        </li>
        <li>
            <Link to="/map-asteroids">Map of Asteroids</Link>
        </li>
        <li>
            <Link to="/near-earth-objects">Objects Near Earth</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
