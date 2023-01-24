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
          <Link to="/picturedays">Nasa Picture of the Day</Link>
        </li>
        <li>
          <Link to="/weathermars">Weather on Planet Mars</Link>
        </li>
        <li>
            <Link to="/marsphotos">Mars Rover Photos</Link>
        </li>
        <li>
            <Link to="/mapasteroids">Map of Asteroids</Link>
        </li>
        <li>
            <Link to="/nearearthobjects">Objects Near Earth</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
