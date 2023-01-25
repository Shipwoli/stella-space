import React from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <nav className='navbar bg-dark'>
      <div className='container-fluid'>
      <ul className='d-flex'>
        <li className="nav-item me-4">
          <Link className='text-light nav-link' to="/">Home</Link>
        </li>
        <li className="nav-item me-4">
          <Link className='text-light nav-link' to="/nasa-picture">Nasa Picture of the Day</Link>
        </li>
        <li className="nav-item me-4">
          <Link className='text-light nav-link' to="/weather-mars">Weather on Planet Mars</Link>
        </li>
        <li className="nav-item me-4">
            <Link className='text-light nav-link' to="/mars-photos">Mars Rover Photos</Link>
        </li>
        <li className="nav-item me-4">
            <Link className='text-light nav-link' to="/map-asteroids">Map of Asteroids</Link>
        </li>
        <li className="nav-item me-4">
            <Link className='text-light nav-link' to="/near-earth-objects">Objects Near Earth</Link>
        </li>
      </ul>
      </div>
    </nav>
  );
}

export default Navbar;
