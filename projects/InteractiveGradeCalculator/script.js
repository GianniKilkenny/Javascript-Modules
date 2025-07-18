const arr = []; // Where the test scores are stored

let num; //The test score that is stored in the array
let i = 1;
while (i <= 5) {
  //Prompt that allows for 3 test scores for input
  let message = `Please Enter the score for Test number ${i}`;
  num = parseInt(prompt(message));
  i++;

  //pushes the score the array
  arr.push(num);
}

// Sets total to 0 and then adds each element of the array
let total = 0;
for (let score of arr) {
  total += score;
}

//Made a funciton to find the average (Divides the total but the number of tests)
function average() {
  let numberOfTests = arr.length;
  console.log(`Your average is ${total / numberOfTests}`);
  return total / numberOfTests;
}

let letterGrade = average();
if (letterGrade >= 90) {
  console.log("Great job you have earned an A");
} else if (letterGrade >= 80) {
  console.log("Grade: B");
} else if (letterGrade >= 70) {
  console.log("Grade: C");
} else if (letterGrade >= 60) {
  console.log("Grade: D");
} else if (letterGrade >= 50) {
  console.log("Grade: F");
}
