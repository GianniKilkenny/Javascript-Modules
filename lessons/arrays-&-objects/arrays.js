const fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits);
// console.log(fruits[0]);
// console.log(fruits[2]);

// console.log(fruits[1]);

// fruits[1] = "blueberry";

// console.log(fruits);

// console.log(fruits.length);

// push - adds to the end
fruits.push("Mango");
console.log(fruits);

// pop - removes from the end
fruits.pop();
console.log(fruits);

// shift adds to beginning
fruits.shift();
console.log(fruits);

// unshift removes from beginning
fruits.unshift("Grape");
console.log(fruits);

// splice - add / remove elements
fruits.splice(1, 1, "Peach");
console.log(fruits);

fruits.splice(1, 2);
console.log(fruits);
