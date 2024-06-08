#!/usr/bin/node
function findSecondLargest (numbers) {
  if (numbers.length <= 1) {
    return 0;
  }

  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > largest) {
      secondLargest = largest;
      largest = numbers[i];
    } else if (numbers[i] > secondLargest && numbers[i] < largest) {
      secondLargest = numbers[i];
    }
  }

  return secondLargest;
}

const args = process.argv.slice(2);
const numbers = args.map(arg => parseInt(arg, 10));

console.log(findSecondLargest(numbers));
