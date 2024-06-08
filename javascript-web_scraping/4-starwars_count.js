#!/usr/bin/node
const request = require('request');

const apiUrl = process.argv[2];

request(apiUrl, function (error, response, body) {
  if (error) {
    console.error('Error:', error);
    return;
  }

  const films = JSON.parse(body).results;
  const wedgeAntillesFilms = films.filter(film => film.characters.includes('https://swapi-api.alx-tools.com/api/people/18/') || film.characters.includes('http://swapi.dev/api/people/18/'));

  console.log(wedgeAntillesFilms.length);
});
