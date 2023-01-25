import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const MarsRoverPhotos = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=e9nvtlCBUdQgghFkPqS8y00lMrXFF2wbNpjwMSTG");
      setPhotos(response.data.photos);
    };
    fetchData();
  }, []);

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/">
        <div>
          {photos.map(photo => (
            <img key={photo.id} src={photo.img_src} alt={photo.earth_date} />
          ))}
        </div>
      </Route>
    </Routes>
    </BrowserRouter>
  );
};
  

export default MarsRoverPhotos;
