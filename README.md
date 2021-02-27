<img src='https://cdn.techinasia.com/wp-content/uploads/2015/06/kickstarter-logo.jpg' />

Table of Contents
-----------------
- [Description](#Description)
- [Getting Started](#Getting-Started)
  * [Dependencies](#Dependencies)
  * [Set up](#Set-up)
- [Schema](#Schema)
- [Routes](#Routes)
- [Application Demo](#Application-Demo)

Description
-----------
This is a clone application designed to mimick the community component of Kickstarter! The application was designed with React, Express, and MySQL.

Getting Started
---------------
### Dependencies
- Node >= v6.13.0
- MySQL v5.7

### Set up
1. Run `npm install` to install the neccesary dependencies.
2. Run `npm run seed` to seed the database with 100 random locations around the world.
3. Run `npm run react` to compile all public files into a bundle.
4. Run `npm run server` to serve up the files at port 3000.

Schema
------
<img src='https://i.imgur.com/690140w.png' width=200 height=350>

Routes
------
GET route for static files

    /:projectId

GET route for

    /community/:projectId

Application Demo
----------------
<img src='https://i.imgur.com/Ps2sTHN.png'>