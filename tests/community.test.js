const request = require('supertest');

describe('API Routes', () => {
  const app = request('http://localhost:3000');

  describe('GET request to /community/:projectId', () => {
    test('It should return a 200 status code for a valid projectId parameter', () => {
      app.get('/community/1')
        .then(response => {
          expect(response.status).toBe(200);
        })
    });

    test('It should return a response body with an array of all possible countries', () => {
      let countries = ['United States', 'Canada', 'United Kingdom', 'Australia', 'France', 'Italy', 'India', 'China', 'Russia'];

      app.get('/community/1')
        .then(response => {
          let retrievedCountries = [];

          response.body.forEach(country => {
            for (let key in country) {
              retrievedCountries.push(key);
            }
          });
          expect(retrievedCountries).toEqual(expect.arrayContaining(countries));
        })
    });

    test('It should return an appropriate error message and status code for an invalid projectId', () => {
      app.get('/community/200')
        .then(response => {
          expect(response.status).toBe(400);
          expect(response.body).toBe('Invalid project id. The provided project id is out of range.');
        })
    });
  });
});

describe('Database functions', () => {
  beforeAll(() => {
    let query = 'INSERT INTO locations (country_id, city_id) VALUES (?, ?)';

    global.db.query(query, [1, 5], (err) => {
      if (err) {
        throw err;
      }
    })
  });

  afterAll(() => {
    let query = 'DROP DATABASE test';

    global.db.query(query, (err) => {
      if (err) {
        throw err;
      }
    })
  });

  test('It should have created a database with a locations table and inserted in one row of data', () => {
    let query = 'SELECT * from locations';

    global.db.query(query, (err, results) => {
      if (err) {
        throw err;
      }
      expect(results).toHaveLength(1);
      expect(results[0]['city_id']).toBe(5);
      expect(results[0]['country_id']).toBe(1);
    })
  });

  test('It should not allow invalid data types to be inserted into the locations table', () => {
    let query = 'INSERT INTO locations (country_id, city_id) VALUES (?, ?)';

    global.db.query(query, ['United States', 'San Francisco'], (err) => {
      expect(err.code).toBe('ER_TRUNCATED_WRONG_VALUE_FOR_FIELD');
    })
  });
});