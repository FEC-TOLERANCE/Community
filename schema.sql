DROP DATABASE IF EXISTS community;

CREATE DATABASE community;

USE community;

CREATE TABLE locations (
  id int NOT NULL AUTO_INCREMENT,
  country_id int NOT NULL,
  city_id int NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE countries (
  id int NOT NULL AUTO_INCREMENT,
  country VARCHAR (100) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE cities (
  id int NOT NULL AUTO_INCREMENT,
  city VARCHAR (100) NOT NULL,
  PRIMARY KEY (id)
);

-- for locations table
-- INSERT INTO locations (country_id, city_id) VALUES (1, 1);
-- INSERT INTO locations (country_id, city_id) VALUES (1, 2);
-- INSERT INTO locations (country_id, city_id) VALUES (1, 3);
-- INSERT INTO locations (country_id, city_id) VALUES (1, 4);
-- INSERT INTO locations (country_id, city_id) VALUES (1, 5);
-- INSERT INTO locations (country_id, city_id) VALUES (1, 6);
-- INSERT INTO locations (country_id, city_id) VALUES (1, 7);
-- INSERT INTO locations (country_id, city_id) VALUES (1, 8);
-- INSERT INTO locations (country_id, city_id) VALUES (1, 9);
-- INSERT INTO locations (country_id, city_id) VALUES (2, 10);
-- INSERT INTO locations (country_id, city_id) VALUES (2, 11);
-- INSERT INTO locations (country_id, city_id) VALUES (2, 12);
-- INSERT INTO locations (country_id, city_id) VALUES (2, 13);
-- INSERT INTO locations (country_id, city_id) VALUES (3, 14);
-- INSERT INTO locations (country_id, city_id) VALUES (3, 15);
-- INSERT INTO locations (country_id, city_id) VALUES (3, 16);
-- INSERT INTO locations (country_id, city_id) VALUES (3, 17);
-- INSERT INTO locations (country_id, city_id) VALUES (3, 18);
-- INSERT INTO locations (country_id, city_id) VALUES (4, 19);
-- INSERT INTO locations (country_id, city_id) VALUES (4, 20);
-- INSERT INTO locations (country_id, city_id) VALUES (4, 21);
-- INSERT INTO locations (country_id, city_id) VALUES (4, 22);
-- INSERT INTO locations (country_id, city_id) VALUES (5, 23);
-- INSERT INTO locations (country_id, city_id) VALUES (5, 24);
-- INSERT INTO locations (country_id, city_id) VALUES (5, 25);
-- INSERT INTO locations (country_id, city_id) VALUES (5, 26);
-- INSERT INTO locations (country_id, city_id) VALUES (6, 27);
-- INSERT INTO locations (country_id, city_id) VALUES (6, 28);
-- INSERT INTO locations (country_id, city_id) VALUES (6, 29);
-- INSERT INTO locations (country_id, city_id) VALUES (6, 30);
-- INSERT INTO locations (country_id, city_id) VALUES (6, 31);
-- INSERT INTO locations (country_id, city_id) VALUES (6, 32);
-- INSERT INTO locations (country_id, city_id) VALUES (7, 33);
-- INSERT INTO locations (country_id, city_id) VALUES (7, 34);
-- INSERT INTO locations (country_id, city_id) VALUES (7, 35);
-- INSERT INTO locations (country_id, city_id) VALUES (7, 36);
-- INSERT INTO locations (country_id, city_id) VALUES (7, 37);
-- INSERT INTO locations (country_id, city_id) VALUES (7, 38);
-- INSERT INTO locations (country_id, city_id) VALUES (7, 39);
-- INSERT INTO locations (country_id, city_id) VALUES (7, 40);
-- INSERT INTO locations (country_id, city_id) VALUES (8, 40);
-- INSERT INTO locations (country_id, city_id) VALUES (8, 41);
-- INSERT INTO locations (country_id, city_id) VALUES (8, 42);
-- INSERT INTO locations (country_id, city_id) VALUES (8, 43);
-- INSERT INTO locations (country_id, city_id) VALUES (8, 44);
-- INSERT INTO locations (country_id, city_id) VALUES (8, 45);
-- INSERT INTO locations (country_id, city_id) VALUES (8, 46);
-- INSERT INTO locations (country_id, city_id) VALUES (9, 47);
-- INSERT INTO locations (country_id, city_id) VALUES (9, 48);
-- INSERT INTO locations (country_id, city_id) VALUES (9, 49);
-- INSERT INTO locations (country_id, city_id) VALUES (9, 50);
-- INSERT INTO locations (country_id, city_id) VALUES (9, 51);
-- INSERT INTO locations (country_id, city_id) VALUES (9, 52);

-- for countries table
-- INSERT INTO countries (country) VALUES ('United States');
-- INSERT INTO countries (country) VALUES ('Canada');
-- INSERT INTO countries (country) VALUES ('United Kingdoms');
-- INSERT INTO countries (country) VALUES ('Australia');
-- INSERT INTO countries (country) VALUES ('France');
-- INSERT INTO countries (country) VALUES ('Italy');
-- INSERT INTO countries (country) VALUES ('India');
-- INSERT INTO countries (country) VALUES ('China');
-- INSERT INTO countries (country) VALUES ('Russia');

-- for cities table
-- INSERT INTO cities (city) VALUES ('New York');
-- INSERT INTO cities (city) VALUES ('San Francisco');
-- INSERT INTO cities (city) VALUES ('Los Angeles');
-- INSERT INTO cities (city) VALUES ('Seattle');
-- INSERT INTO cities (city) VALUES ('Houston');
-- INSERT INTO cities (city) VALUES ('Miami');
-- INSERT INTO cities (city) VALUES ('Atlanta');
-- INSERT INTO cities (city) VALUES ('Dallas');
-- INSERT INTO cities (city) VALUES ('Portland');
-- INSERT INTO cities (city) VALUES ('Toronto');
-- INSERT INTO cities (city) VALUES ('Montreal');
-- INSERT INTO cities (city) VALUES ('Vancouver');
-- INSERT INTO cities (city) VALUES ('Calgary');
-- INSERT INTO cities (city) VALUES ('Birmingham');
-- INSERT INTO cities (city) VALUES ('Manchester');
-- INSERT INTO cities (city) VALUES ('London');
-- INSERT INTO cities (city) VALUES ('Glasgow');
-- INSERT INTO cities (city) VALUES ('Liverpool');
-- INSERT INTO cities (city) VALUES ('Sydney');
-- INSERT INTO cities (city) VALUES ('Melbourne');
-- INSERT INTO cities (city) VALUES ('Perth');
-- INSERT INTO cities (city) VALUES ('Brisbane');
-- INSERT INTO cities (city) VALUES ('Paris');
-- INSERT INTO cities (city) VALUES ('Nice');
-- INSERT INTO cities (city) VALUES ('Marseille');
-- INSERT INTO cities (city) VALUES ('Lyon');
-- INSERT INTO cities (city) VALUES ('Rome');
-- INSERT INTO cities (city) VALUES ('Florence');
-- INSERT INTO cities (city) VALUES ('Venice');
-- INSERT INTO cities (city) VALUES ('Milan');
-- INSERT INTO cities (city) VALUES ('Turin');
-- INSERT INTO cities (city) VALUES ('Bologna');
-- INSERT INTO cities (city) VALUES ('New Delhi');
-- INSERT INTO cities (city) VALUES ('Mumbai');
-- INSERT INTO cities (city) VALUES ('Kolkata');
-- INSERT INTO cities (city) VALUES ('Bengaluru');
-- INSERT INTO cities (city) VALUES ('Chennai');
-- INSERT INTO cities (city) VALUES ('Hyderabad');
-- INSERT INTO cities (city) VALUES ('Ahmedabad');
-- INSERT INTO cities (city) VALUES ('Surat');
-- INSERT INTO cities (city) VALUES ('Hong Kong');
-- INSERT INTO cities (city) VALUES ('Shanghai');
-- INSERT INTO cities (city) VALUES ('Beijing');
-- INSERT INTO cities (city) VALUES ('Chengdu');
-- INSERT INTO cities (city) VALUES ('Shenzhen');
-- INSERT INTO cities (city) VALUES ('Chongqing');
-- INSERT INTO cities (city) VALUES ('Wuhan');
-- INSERT INTO cities (city) VALUES ('Moscow');
-- INSERT INTO cities (city) VALUES ('Saint Petersburg');
-- INSERT INTO cities (city) VALUES ('Novosibirsk');
-- INSERT INTO cities (city) VALUES ('Yekaterinburg');
-- INSERT INTO cities (city) VALUES ('Samara');
-- INSERT INTO cities (city) VALUES ('Omsk');
