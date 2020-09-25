const mysql = require('mysql');
const config = require('./config.js');

const connection = mysql.createConnection(config);

const insertLocations = (countries, cities) => {
  let query = 'INSERT INTO locations (country_id, city_id) VALUES (?, ?)';
  let counter = 1, promises = [];

  countries.forEach((country, index) => {
    for (let city in cities[country]) {
      let saveLocation = new Promise((resolve, reject) => {
        connection.query(query, [index + 1, counter], (err) => {
          err ? reject(err) : resolve();
        })
        counter++;
      })
      promises.push(saveLocation);
    }
  })
  return Promise.all(promises);
};

const insertCountries = (countries) => {
  let query = 'INSERT INTO countries (country) VALUES (?)', promises = [];

  countries.forEach(country => {
    let saveCountry = new Promise((resolve, reject) => {
      connection.query(query, [country], (err) => {
        err ? reject(err) : resolve();
      });
    })
    promises.push(saveCountry);
  })
  return Promise.all(promises)
};

const insertCities = (cities) => {
  let query = 'INSERT INTO cities (city) VALUES (?)', promises = [];

  for (let city in cities) {
    let cityName = cities[city];

    cityName.forEach(city => {
      let saveCity = new Promise ((resolve, reject) => {
        connection.query(query, [city], (err) => {
          err ? reject(err) : resolve();
        })
      })
      promises.push(saveCity);
    })
  }
  return Promise.all(promises);
};

module.exports = {
  insertLocations,
  insertCountries,
  insertCities
}