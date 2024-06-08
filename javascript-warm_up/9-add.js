#!/usr/bin/node
function add (a, b) {
  console.log(a + b);
}

const args = process.argv.slice(2);
const num1 = parseInt(args[0], 10);
const num2 = parseInt(args[1], 10);

add(num1, num2);
