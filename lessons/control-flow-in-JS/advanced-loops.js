// For each Loop

// const fruits = ["apple", "banana", "cherry"];

// fruits.forEach(function (fruit) {
//   console.log(fruit);
// });

// (For of) Loop (Used for arrays and iterable objects)

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

// for (let num of nums) {
//   console.log(num);
// }

// (For in Loop) used for objects

const person = {
  name: "Gmoney",
  age: "300",
  city: "T's",
};

for (const key in person) {
  console.log("key= ", key);
  console.log(`person[${key}]:val=`, person[key]);
}
