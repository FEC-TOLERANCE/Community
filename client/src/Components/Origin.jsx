import React, { useState, useEffect } from 'react';

function Origin (props) {
  const [topCountries, setCountries] = useState([]);
  const [topCities, setCities] = useState([]);

  useEffect(() => {
    getTopCountries(props.locations);
    getTopCities(props.locations);
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

  const getTopCities = (locations) => {
    let allCities = [];

    locations.forEach(location => {
      for (let country in location) {
        let cities = location[country].cities, countryBackers = location[country].chance * props.backers;

        cities.forEach(city => {
          let cityName = Object.keys(city)[0], cityBackers = Math.floor(city[cityName] * countryBackers);

          allCities.push({[cityName]: cityBackers, 'country': country});
        })
      }
    })

    let sortedCities = allCities.sort((a, b) => {
      let cityNameA = [Object.keys(a)[0]], cityNameB = [Object.keys(b)[0]];

      return b[cityNameB] - a[cityNameA];
    })
    setCities(sortedCities.slice(0, 9));
  }

  return (
    <div id='originContainer'>
      <div id='cities'>
        <div className='title'>Where Backers Come From</div>
        <div className='title2'>Top Cities</div>
        <div id='individualContainer'>
          {topCities.map((city, index) => {
            return (
              <div className='locationEntry' key={index}>
                <div className='locationName'>{Object.keys(city)[0]}    {Object.values(city)[1]}</div>
                <div className='locationValue'>{Object.values(city)[0]} backers</div>
              </div>
            )
          })}
        </div>
      </div>
      <div id='countries'>
        <div className='title'>Where Backers Come From</div>
        <div className='title2'>Top Countries</div>
        <div className='individualContainer'>
          {topCountries.map((country, index) => {
            return (
              <div className='locationEntry' key={index}>
                <div className='locationName'>{Object.keys(country)}</div>
                <div className='locationValue'>{Object.values(country)} backers</div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Origin;