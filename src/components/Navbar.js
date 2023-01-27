import React from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <nav className='navbar bg-dark'>
      <div className='container-fluid'>
      <ul className='d-flex'>
        <li className="nav-item me-4">
          <button>
          <Link className='text-dark nav-link' to="/">Home</Link>
          </button>
        </li>
        <li className='nav-item me-4'>
          <button>
          <Link className='text-dark nav-link' to="/picture-days">Nasa Picture of the Day</Link>
          </button>
        </li>
        <li className="nav-item me-4">
          <button>
          <Link className='text-dark nav-link' to="/weather-mars">Weather on Planet Mars</Link>
          </button>
        </li>
        <li className="nav-item me-4">
          <button>
            <Link className='text-dark nav-link' to="/mars-rover-photos">Mars Rover Photos</Link>
            </button>
        </li>
        <li className="nav-item me-4">
          <button>
            <Link className='text-dark nav-link' to="/map-asteroids">Map of Asteroids</Link>
            </button>
        </li>
        <li className="nav-item me-4">
        <button>
            <Link className='text-dark nav-link' to="/near-earth-objects">Objects Near Earth</Link>
            </button>
        </li> 
      </ul>
      </div>
    </nav>
  );
}

export default Navbar;
