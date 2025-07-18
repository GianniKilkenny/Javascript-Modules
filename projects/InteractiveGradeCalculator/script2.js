function getAverage(score1, score2, score3) {
  return (score1 + score2 + score3) / 3;
}

function assignGrade(average) {
  if (average >= 90) {
    return "A";
  } else if (average >= 80) {
    return "B";
  } else if (average >= 70) {
    return "C";
  } else if (average >= 60) {
    return "D";
  } else if (average >= 50) {
    return "F";
  }
}

//get user input
const score1 = parseFloat(prompt("What is the score for your 1st Test"));
const score2 = parseFloat(prompt("What is the score for your 2nd Test"));
const score3 = parseFloat(prompt("What is the score for your 3rd Test"));

const average = getAverage(score1, score2, score3);
const grade = assignGrade(average);

console.log(`Average Score: ${average} and Final Grade: ${grade}`);
