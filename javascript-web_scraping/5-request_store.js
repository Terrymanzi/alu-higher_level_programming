#!usr/bin/node
const request = require('request');
const fs = require('fs');

function saveWebPage(url, filePath) {
  request(url, function (error, response, body) {
    if (error) {
      console.error('Error:', error);
      return;
    }

    if (response && response.statusCode !== 200) {
      console.error('Failed to fetch webpage. Status Code:', response.statusCode);
      return;
    }

    fs.writeFile(filePath, body, 'utf8', function (err) {
      if (err) {
        console.error('Error writing file:', err);
        return;
      }
      console.log('Webpage content saved to', filePath);
    });
  });
}

// Usage example
const url = process.argv[2];
const filePath = process.argv[3];

if (!url || !filePath) {
  console.error('Usage: node script.js <URL> <file-path>');
} else {
  saveWebPage(url, filePath);
}
