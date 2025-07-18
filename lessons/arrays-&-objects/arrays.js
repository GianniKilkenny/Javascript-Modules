// const fruits = ["Apple", "Banana", "Cherry"];
// console.log(fruits);
// // console.log(fruits[0]);
// // console.log(fruits[2]);

// // console.log(fruits[1]);

// // fruits[1] = "blueberry";

// // console.log(fruits);

// // console.log(fruits.length);

// // push - adds to the end
// fruits.push("Mango");
// console.log(fruits);

// // pop - removes from the end
// fruits.pop();
// console.log(fruits);

// // shift adds to beginning
// fruits.shift();
// console.log(fruits);

// // unshift removes from beginning
// fruits.unshift("Grape");
// console.log(fruits);

// // splice - add / remove elements
// fruits.splice(1, 1, "Peach");
// console.log(fruits);

// fruits.splice(1, 2);
// console.log(fruits);

const numbers = [1, 2, 3, 4, 5];

// map
console.log("numbers =", numbers);
const doubled = numbers.map((num) => num * 2);
console.log("doubled =", doubled);

// filter
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers);
