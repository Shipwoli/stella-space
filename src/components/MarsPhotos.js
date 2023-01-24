import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function MarsRoverPhotos() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=e9nvtlCBUdQgghFkPqS8y00lMrXFF2wbNpjwMSTG')
      .then(res => res.json())
      .then(data => setPhotos(data.photos))
  }, []);

  return (
    <Router>
      <Route path="/">
        <div>
          {photos.map(photo => (
            <img key={photo.id} src={photo.img_src} alt={photo.earth_date} />
          ))}
        </div>
      </Route>
    </Router>
  );
}

export default MarsRoverPhotos;
