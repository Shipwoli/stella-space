import React, { useState, useEffect } from 'react';

function MarsRoverPhotos() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=h14aKNTMgeEqclkSY2yFEFYUKHSji7fjLaTN60F3')
      .then(response => response.json())
      .then(data => {
        setPhotos(data.photos);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {photos.map(photo => (
        <img key={photo.id} src={photo.img_src} alt={photo.camera.name} />
      ))}
    </div>
  );
}

export default MarsRoverPhotos;
