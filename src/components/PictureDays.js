import React from 'react';
import { useState , useEffect } from 'react';

function NasaPhoto() {
    const [photoData, setPhotoData] = useState(null)
     
    useEffect(() => {
        fetchPhoto();

        async function fetchPhoto(){
            const resp = await fetch(
                `https://api.nasa.gov/planetary/apod?api_key=e9nvtlCBUdQgghFkPqS8y00lMrXFF2wbNpjwMSTG`
            );
            const data = resp.json
            setPhotoData(data);
            console.log(data);
        }
    }, []);

    return (
        <div>
            <img src={photoData.url} alt={photoData.title} />
            <div>
                <h1>{photoData.title}</h1>
                <p>{photoData.date}</p>
                <p>{photoData.explanation}</p>
            </div>
        </div>
    );
}

export default NasaPhoto;