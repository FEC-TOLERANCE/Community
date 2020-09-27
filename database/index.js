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

const insertRandomLocations = (countries, cities) => {
  let query = 'INSERT INTO randomLocations (locations) VALUES (?)', promises = [];

  for (let i = 0; i < 100; i++) {
   let locationCollection = {}, sum = [], total;

   for (let i = 0; i < countries.length; i++) {
    sum.push(Math.floor(Math.random() * 100));
   }

   total = sum.reduce((accumulated, num) => {
     return accumulated += num;
   }, 0);

    countries.forEach((country, index) => {
      locationCollection[country] = {'chance': (sum[index]/total), 'cities': randomCities(country, cities)};
    })

    let saveProjectLocation = new Promise ((resolve, reject) => {
      connection.query(query, [JSON.stringify(locationCollection)], (err) => {
        err ? reject(err) : resolve();
      })
    });
    promises.push(saveProjectLocation);
  }
  return Promise.all(promises);
};

const randomCities = (country, cities) => {
  let cityCollection = [], randomNums = [], total;

  for (let i = 0; i < cities[country].length; i++) {
    randomNums.push(Math.floor(Math.random() * 100));
  }

  total = randomNums.reduce((accumulated, num) => {
    return accumulated += num;
  }, 0);

  cities[country].forEach((city, index) => {
    cityCollection.push({[city]: (randomNums[index]/total)});
  });
  return cityCollection;
};

module.exports = {
  insertLocations,
  insertCountries,
  insertCities,
  insertRandomLocations
}