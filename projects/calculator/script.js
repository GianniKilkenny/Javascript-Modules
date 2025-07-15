let num1 = prompt("Enter first number");
let num2 = prompt("Enter second number");

num1 = parseFloat(num1);
num2 = parseFloat(num2);

//console.log(typeof num1, typeof num2);

const sum = num1 + num2;
const diff = num1 - num2;
const product = num1 * num2;
const quotient = num1 / num2;

console.log(`Sum: ${sum}`);
console.log(`prod: ${product}`);
console.log(`dif: ${diff}`);
console.log(`quotient: ${quotient}`);
