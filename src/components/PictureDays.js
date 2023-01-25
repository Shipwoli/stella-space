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
        <BrowserRouter>
            <Routes>
                <Route path="/pictureday">
                    <div>
                        <img src={photoData.url} alt={photoData.title} />
                        <div>
                            <h1>{photoData.title}</h1>
                            <p>{photoData.date}</p>
                            <p>{photoData.explanation}</p>
                        </div>
                    </div>
                </Route>
            </Routes>
            </BrowserRouter>
    );
}

export default NasaPhoto;