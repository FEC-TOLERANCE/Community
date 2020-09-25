const insertData = require('./index.js');
const seedData = require('./locationData.js');
const countries = seedData.countries, cities = seedData.cities;

Promise.resolve(insertData.insertLocations(countries, cities))
  .then(() => insertData.insertCountries(countries))
  .then(() => insertData.insertCities(cities))
  .then(() => process.exit());