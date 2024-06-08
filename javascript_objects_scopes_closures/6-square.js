#!/usr/bin/node
// 6-square.js
const SquareBase = require('./5-square');

class Square extends SquareBase {
  char Print (c) {
    const char = c || 'X';
    if (this.width && this.height) {
      const row = char.repeat(this.width);
      for (let i = 0; i < this.height; i++) {
        console.log(row);
      }
    }
  }
}

module.exports = Square;
