const db = require ('../database/index.js');

const parseLocations = (countryNames, cityNames, countryChances, cityChances) => {
  let allLocations = [], countries = parseObjectToArray(countryNames), cities = parseObjectToArray(cityNames), promises = [];

  countries.forEach((country, index) => {
    let countryProperties = {};
    let countryLength = new Promise((resolve) => {
      resolve(db.getCountryLength(index + 1));
    });
    countryProperties[country] = {'countryChance': countryChances[index], cities: []};
    allLocations.push(countryProperties);
    promises.push(countryLength);
  })

  return Promise.all(promises)
    .then(citiesLengths => {
      let cityCounter = 0, initialCount = citiesLengths[0];

      citiesLengths.forEach((citylength, index) => {
        let country = Object.keys(allLocations[index])[0];

        for (let i = cityCounter; i < initialCount; i++) {
          allLocations[index][country].cities.push({[cities[i]]: cityChances[i]});
        }
        cityCounter += citiesLengths[index];
        initialCount += citiesLengths[index + 1];
      })
      return allLocations;
    })
    .catch(err => {
      let e = new Error(err);
      e.name = 'parserError';
      return e;
    })
};

const parseObjectToArray = (objectArray) => {
  let newArray = [];

  objectArray.forEach(element => {
    newArray.push(Object.values(element)[0]);
  })
  return newArray;
};

module.exports = {
  parseLocations
};