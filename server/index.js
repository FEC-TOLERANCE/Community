const express = require('express');
const app = express();
const port = 3000;
const db = require('../database/index.js');
const parser = require('./parser.js');

app.use(express.static(__dirname + '/../client/dist'));

app.get('/community/:projectId', (req, res) => {
  let projectId = req.params.projectId, cityIds = [], countryChance = [], cityChance = [], countryNames = [], cityNames = [], finalLocations;

  Promise.resolve(db.getLocations(projectId))
    .then(projectLocations => {
      let countries = Object.keys(projectLocations);

      for (let country in projectLocations) {
        let cities = projectLocations[country].cities;
        countryChance.push(projectLocations[country].chance);

        cities.forEach(city => {
          cityIds.push(Object.keys(city)[0]);
          cityChance.push(Object.values(city)[0]);
        });
      }
      return db.getCountry(countries);
    })
    .then(allCountries => {
      countryNames = allCountries.flat();
      return db.getCity(cityIds);
    })
    .then(allCities => {
      cityNames = allCities.flat();
      finalLocations = parser.parseLocations(countryNames, cityNames, countryChance, cityChance);
      return finalLocations;
    })
    .then(locations => {
      res.send(locations);
    })
    .catch(err => {
      res.send(err);
    })
});

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
});