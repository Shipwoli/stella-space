import React, { useState, useEffect } from 'react';

function NearEarthObjects() {

  const [nearEarthObjects, setNearEarthObjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        'https://api.nasa.gov/neo/rest/v1/feed?start_date=2022-01-01&end_date=2022-01-07&api_key=e9nvtlCBUdQgghFkPqS8y00lMrXFF2wbNpjwMSTG',
      );

      const data = await response.json();
      setNearEarthObjects(data.near_earth_objects);
    };

    fetchData();
  }, []);
  return (
    
    <div>
      <h1>Near Earth Objects</h1>
      {nearEarthObjects.map((object) => (
        <div key={object.id}>
          <h2>{object.name}</h2>
          <p>{object.nasa_jpl_url}</p>
        </div>
      ))}
    </div>
  );
}
export default NearEarthObjects;