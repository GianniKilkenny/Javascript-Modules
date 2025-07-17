// function greet() {
//   console.log("Hello World");
// }

// greet(); // Calling the function

// function greetUser(name) {
//   console.log(`Hello ${name}!`);
// }

// greetUser("Alice");
// greetUser("Gianni");
// greetUser("bitch");

// function addNumbers(num1, num2, num3) {
//   console.log(`Sum = ${num1 + num2 + num3}`);
// }

// addNumbers(5, 10, 20); //Ouput 35
// addNumbers(30, 40, 50);

// const greet = function (name) {
//   return `Hello, ${name}`;
// };

// console.log(greet("Pussy boi"));

// Arrow Function (shorter syntax)

// const square = (num) => num ** 2;
// console.log(square(5));

// const multiply = (a, b) => a * b;
// console.log(multiply(5, 4));

//Funciton scope and hoisting

// let globalVar = "I am global";

// function testScope() {
//   let localVar = "I exist only in this function";
//   console.log(globalVar);
//   console.log(localVar);
// }

// testScope();
// console.log(globalVar);
// console.log(localVar);

// hello();

// function hello() {
//   console.log("Hello from a funciton declaration");
// }

const greet = function () {
  console.log("Hello from a function expression");
};

greet();
