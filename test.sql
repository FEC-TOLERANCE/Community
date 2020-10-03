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

CREATE TABLE randomLocations (
  id int NOT NULL AUTO_INCREMENT,
  locations VARCHAR (2000) NOT NULL,
  PRIMARY KEY (id)
);