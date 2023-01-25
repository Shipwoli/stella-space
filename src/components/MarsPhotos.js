
import React, { useState, useEffect } from "react";
import axios from "axios";



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
    <div>
      {photos.map(photo => (
        <img src={photo.img_src} alt={photo.camera.name} key={photo.id} />
      ))}
    </div>
  );
};
  

export default MarsRoverPhotos;
