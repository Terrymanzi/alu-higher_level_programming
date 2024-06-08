#!/usr/bin/node
const request = require('request');

const apiUrl = process.argv[2];

if (!apiUrl) {
  console.error("Please provide the API URL of the Star Wars API as the first argument.");
  process.exit(1);
}

const characterId = 18; // Wedge Antilles

// Function to fetch the number of movies where Wedge Antilles is present
function getMoviesWithWedge(apiUrl) {
  return new Promise((resolve, reject) => {
    request(apiUrl, (error, response, body) => {
      if (error) {
        reject(error);
        return;
      }

      if (response.statusCode !== 200) {
        reject(`Unexpected status code: ${response.statusCode}`);
        return;
      }

      const films = JSON.parse(body).results;
      const moviesWithWedge = films.filter(film => film.characters.includes(`https://swapi-api.alx-tools.com/api/people/${characterId}/`));

      resolve(moviesWithWedge.length);
    });
  });
}

// Main function to print the number of movies with Wedge Antilles
async function main() {
  try {
    const count = await getMoviesWithWedge(apiUrl);
    console.log(`Number of movies where Wedge Antilles is present: ${count}`);
  } catch (error) {
    console.error("Error:", error);
    process.exit(1);
  }
}

main();
