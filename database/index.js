const mysql = require('mysql');
const config = require('./config.js');

const connection = mysql.createConnection(config);

const insertLocations = (countries, cities) => {
  let query = 'INSERT INTO locations (country_id, city_id) VALUES (?, ?)';
  let counter = 1;

  countries.forEach((country, index) => {
    for (let city in cities[country]) {
      connection.query(query, [index + 1, counter], (err) => {
        if (err) throw new Error(err);
      })
      counter++;
    }
  })
};

const insertCountries = (countries) => {
  let query = 'INSERT INTO countries (country) VALUES (?)';

  countries.forEach(country => {
    connection.query(query, [country], (err) => {
      if (err) throw new Error (err);
    });
  })
};

const insertCities = (cities) => {
  let query = 'INSERT INTO cities (city) VALUES (?)';

  for (let city in cities) {
    let cityName = cities[city];

    cityName.forEach(city => {
      connection.query(query, [city], (err) => {
        if (err) throw new Error(err);
      })
    })
  }
};

module.exports = {
  insertLocations,
  insertCountries,
  insertCities
}