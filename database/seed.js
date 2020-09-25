const insertData = require('./index.js');
const seedData = require('./locationData.js');
const countries = seedData.countries, cities = seedData.cities;

insertData.insertLocations(countries, cities);
insertData.insertCountries(countries);
insertData.insertCities(cities);