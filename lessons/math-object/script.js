// console.log(Math.PI);
// console.log(Math.E);

//  Math.round - rounds a number to the nearest integer
console.log(Math.round(4.6));
console.log(Math.round(4.3));

// Math.floor - Rounds downs to the nearest integer
console.log(Math.floor(4.9));
console.log(Math.floor(4.1));

// Math.ceil - rounds up to the nearest integer
console.log("Math.ceil()------");
console.log(Math.ceil(4.1));

// Math.max and Math.min - find the largest / smallest number
console.log(Math.max(10, 20, 30, 99));
console.log(Math.min(10, 20, 30, 99));

// Math.abs() - Gets the absolute value of a number
console.log(Math.abs(-10));

// Math.pow() - Power of  a number
console.log(Math.pow(10, 4));
console.log(Math.pow(5, 4));

console.log(2 ** 3);
console.log(10 ** 4);

// Math.sqrt()
console.log(Math.sqrt(25));
console.log(Math.sqrt(144));
console.log(Math.sqrt(361));

// check if a number is a perfect square

const num = 12;
if (Math.sqrt(num) % 1 === 0) {
  console.log(`${num} is a perfect square`);
} else {
  console.log(`${num} is not a perfect square`);
}
