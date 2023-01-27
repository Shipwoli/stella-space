import React, { useState, useEffect } from 'react';

const apiKey = '5BbXRsauyZs4JIEHdvHLUcQTYBr2NZHSHhjqvt28';
const baseUrl = 'https://api.nasa.gov/neo/rest/v1/feed?start_date=START_DATE&end_date=END_DATE&api_key=';

function NearEarthObjects() {
    const [neoData, setNeoData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function fetchData() {
            setIsLoading(true);

            // Replace START_DATE and END_DATE with desired date range
            const url = baseUrl.replace('START_DATE', '2022-01-01').replace('END_DATE', '2022-01-07') + apiKey;

            try {
                const response = await fetch(url);
                const data = await response.json();

                // Extract the desired data from the response
                const neoData = data.near_earth_objects;
                setNeoData(neoData);
            } catch (error) {
                console.log(error);
            }

            setIsLoading(false);
        }

        fetchData();
    }, []);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (neoData.length === 0) {
        return <p>No data found</p>;
    }

    return (
        <div>
            {Object.keys(neoData).map(date => (
                <div key={date}>
                    <h2>{date}</h2>
                    {neoData[date].map(object => (
                        <div key={object.name}>
                            <p>Name: {object.name}</p>
                            <p>
                                Diameter:
                                {' '}
                                {object.estimated_diameter.meters.estimated_diameter_min}
                                {' - '}
                                {object.estimated_diameter.meters.estimated_diameter_max}
                                {' '}
                                meters
                            </p>
                            <p>
                                Distance from Earth:
                                {' '}
                                {object.close_approach_data[0].miss_distance.miles}
                                {' '}
                                miles
                            </p>
                            <hr />
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default NearEarthObjects;
