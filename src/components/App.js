import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MapAsteroids from "./MapAsteroids";
import MarsPhotos from "./MarsPhotos";
import WeatherMars from "./WeatherMars";
import NasaPicture from "./PictureDays";
import NearEarthObjects from "./NearEarthObjects";
import "./App.css";
import Navbar from "./Navbar";
import IntroParagraph from "./IntroParagraph";


export default function App() {
    return (
      <BrowserRouter>
      <Navbar />
      <IntroParagraph/>
      <NasaPicture/>
      
     <Routes>
    
        
        {/* <Route exact path="/" element={Home} /> */}
        <Route path="/map-asteroids" element={MapAsteroid} />
        <Route path="/mars-photos" element={MarsPhotos} />
        <Route path="/weather-mars" element={WeatherMars} />
        <Route path="/nasa-picture" element={NasaPicture} />
        <Route path="/near-earth-objects" element={NearEarthObjects} />

       
     </Routes>
     
     </BrowserRouter>
     
     
    )
  }

 