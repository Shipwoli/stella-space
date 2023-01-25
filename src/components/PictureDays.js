import React from "react";
import  { useState, useEffect } from 'react';



const NasaPicture = () => {
  const [picture, setPicture] = useState(null);

  useEffect(() => {
    fetch('https://api.nasa.gov/planetary/apod?api_key=e9nvtlCBUdQgghFkPqS8y00lMrXFF2wbNpjwMSTG')
      .then(response => response.json())
      .then(data => setPicture(data));
  }, []);

  if (!picture) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h1>{picture.title}</h1>
      <img src={picture.url} alt={picture.title} />
      <p>{picture.explanation}</p>
    </>
  );
};

export default NasaPicture;


