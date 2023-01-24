import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MapAsteroids from "./MapAsteroids";
import MarsPhotos from "./MarsPhotos";
import WeatherMars from "./WeatherMars";
import PictureDays from "./PictureDays";
import NearEarthObjects from "./NearEarthObjects";
import "./App.css";
import Navbar from "./Navbar";
import IntroParagraph from "./IntroParagraph";


export default function App() {
    return (
      <BrowserRouter>
      <Navbar />
      <IntroParagraph/>
     <Routes>
        
        {/* <Route exact path="/" component={Home} /> */}
        <Route path="/map-asteroids" component={MapAsteroids} />
        <Route path="/mars-photos" component={MarsPhotos} />
        <Route path="/weather-mars" component={WeatherMars} />
        <Route path="/picture-days" component={PictureDays} />
        <Route path="/near-earth-objects" component={NearEarthObjects} />

       
     </Routes>
     </BrowserRouter>
     
     
    )
  }

 