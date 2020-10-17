import React, { useState, useEffect } from 'react';

function Origin (props) {
  const [topCountries, setCountries] = useState([]);
  const [topCities, setCities] = useState([]);

  useEffect(() => {
    getTopCountries(props.locations);
  }, [props.locations]);

  const getTopCountries = (countries) => {
    let filteredCountries = [], sortedCountries = [];

    countries.forEach(country => {
      let countryName = Object.keys(country);

      filteredCountries.push({[countryName]: country[countryName].chance});
    })

    sortedCountries = filteredCountries.sort((a, b) => {
      let countryNameA = Object.keys(a), countryNameB = Object.keys(b);

      return b[countryNameB] - a[countryNameA];
    })

    sortedCountries.forEach(country => {
      country[Object.keys(country)] = Math.floor(Object.values(country)[0] * props.backers);
    })
    setCountries(sortedCountries);
  };

  return (
    <div id='container'>
      <div id='cities'>
        <div id='cityTitle'>Where Backers Come From</div>
        <div id='cityTitle2'>Top Cities</div>
        <div id='cityContainer'></div>
      </div>
      <div id='countries'>
        <div id='countryTitle'>Where Backers Come From</div>
        <div id='countryTitle2'>Top Countries</div>
        <div className='countryContainer'>
          {topCountries.map((country, index) => {
            return (
              <div className='countryEntry' key={index}>
                <div className='countryName'>{Object.keys(country)}</div>
                <div className='countryValue'>{Object.values(country)} backers</div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Origin;