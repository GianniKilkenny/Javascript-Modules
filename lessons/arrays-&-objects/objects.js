const person = {
  name: "Gmoney",
  age: 25,
  city: "Newyork",
};
console.log(person);

console.log(person.name);

console.log(person["age"]);

person.country = "USA";

console.log(person);

person.age = 30;
console.log(person);

delete person.city;
console.log(person);

for (const key in person) {
  console.log(key);
  console.log("value =", person[key]);
}
