#!/usr/bin/node
const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const filePath = process.argv[3];

if (!url || !filePath) {
  console.error('Usage: node script.js <URL> <file path>');
  process.exit(1);
}

request(url, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
    return;
  }

  if (response.statusCode !== 200) {
    console.error('Failed to retrieve the webpage. Status code:', response.statusCode);
    return;
  }

  // Trim any leading whitespace or unwanted characters
  body = body.trim();

  fs.writeFile(filePath, body, { encoding: 'utf-8' }, (err) => {
    if (err) {
      console.error('Error writing to file:', err);
      return;
    }
    console.log('Webpage content successfully saved to', filePath);
  });
});
