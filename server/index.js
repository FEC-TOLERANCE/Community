const express = require('express');
const app = express();
const port = 3000;
const db = require('../database/index.js');
const cors = require('cors');

app.use(cors());

app.use(express.static(__dirname + '/../client/dist'));
app.use('/:projectId',express.static(__dirname + '/../client/dist'));

app.get('/community/:projectId', (req, res) => {
  let projectId = req.params.projectId

  db.getLocations(projectId)
    .then(projectLocations => {
      if (projectLocations.length === 0) {
        let e = new Error ('Invalid project id. The provided project id is out of range.');
        e.name = 'invalidProjectId';
        throw e;
      } else {
        projectLocations = JSON.parse(projectLocations[0].locations)
      }

      let countryIds = Object.keys(projectLocations), cities = Object.values(projectLocations), promises = [];

      countryIds.forEach(country => {
        const getCountryName = new Promise((resolve) => {
          resolve(db.getCountry(country));
        })
        promises.push(getCountryName);
      });

      return Promise.all(promises)
        .then(countryNames => {
          let countries = countryNames.flat().map(name => name.country), locations = [];

          countries.forEach((country, index) => {
            locations.push({[country]: cities[index]});
          });
          return locations;
        });
    })
    .then(namedCountryLocations => {
      let countryNames = namedCountryLocations.map(country => Object.keys(country)[0]);
      let cityIds = [], promises  = [];

      namedCountryLocations.map((country, index) => {
        let cities = country[countryNames[index]].cities;

        cities.forEach(city => {
          cityIds.push(Object.keys(city)[0]);
        });
      });

      cityIds.forEach(cityId => {
        const getCityName = new Promise((resolve) => {
          resolve(db.getCity(cityId));
        });
        promises.push(getCityName);
      });

      return Promise.all(promises)
        .then(cityNames => {
          let allCityNames = cityNames.flat().map(name => name.city);
          let count = 0;

          namedCountryLocations.forEach((country, index) => {
            let cityProperty = country[countryNames[index]].cities, countryName = countryNames[index];
            let cityProbabilities = cityProperty.map(city => Object.values(city)[0]);
            let cities = [];

            cityProbabilities.forEach((probability) => {
              cities.push({[allCityNames[count]]: probability});
              count++;
            })
            namedCountryLocations[index][countryName].cities = cities;
          })
          return namedCountryLocations;
        })
    })
    .then(parsedLocations => {
      res.status(200).send(parsedLocations);
    })
    .catch(err => {
      if (err.name === 'invalidProjectId') {
        res.status(400).json(err.message);
      } else {
        res.status(500);
      }
    })
});

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})