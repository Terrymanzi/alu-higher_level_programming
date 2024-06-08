#!/usr/bin/node

# Check if the request module is installed
if ! command -v node &> /dev/null; then
    echo "Node.js is required to run this script."
    exit 1
fi

# Check if the required argument is provided
if [ $# -ne 1 ]; then
    echo "Usage: $0 <API_URL>"
    exit 1
fi

API_URL=$1

# Make the API request and count the number of films where Wedge Antilles is present
node - << EOF
const request = require('request');

const apiUrl = '$API_URL';

request(apiUrl, (error, response, body) => {
    if (error) {
        console.error('Error:', error);
        return;
    }

    const films = JSON.parse(body).results;
    const wedgeAntillesId = '18';
    let count = 0;

    films.forEach(film => {
        if (film.characters.includes(wedgeAntillesId)) {
            count++;
        }
    });

    console.log(count);
});
EOF
