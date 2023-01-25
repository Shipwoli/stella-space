import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MapAsteroids from "./MapAsteroids";
import MarsRoverPhotos from "./MarsPhotos";
import WeatherMars from "./WeatherMars";
import NasaPicture from "./PictureDays";
// import NearEarthObjects from "./NearEarthObjects";
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
    
        
        {/* <Route exact path="/" component={Home} /> */}
        <Route path="/map-asteroids" component={MapAsteroids} />
        <Route path="/mars-photos" component={MarsRoverPhotos} />
        <Route path="/weather-mars" component={WeatherMars} />
        <Route path="/nasa-picture" component={NasaPicture} />
        {/* <Route path="/near-earth-objects" component={NearEarthObjects} /> */}

       
     </Routes>
     </BrowserRouter>
     
     
    )
  }

 