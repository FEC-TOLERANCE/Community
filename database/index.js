const mysql = require('mysql');
const config = require('./config.js');

const connection = mysql.createConnection(config);

const insertData = (data) => {
  for (let i = 0; i < 100; i++) {
    let randomCountry = Math.floor(Math.random() * data.length);
    let randomCity = Math.floor(Math.random() * data.randomCountry.length);
  }
}

module.exports = {
  insertData
}