//guess counter
let guesses = 1;

// The random number that was chosen
let randomNumber = Math.floor(Math.random() * 10) + 1;

let message = "Pick a number between 1 and 10";

while (true) {
  let num = parseInt(prompt(message));

  if (num === randomNumber) {
    console.log(`You guessed [${randomNumber}] which was the magic number!!`);
    console.log(`It Took you ${guesses} tries to guess the number`);
    break;
  }
  if (num < randomNumber) {
    message = "Too Low! Pick a higher number";
  }
  if (num > randomNumber) {
    message = "Too high! Pick a lower number";
  }

  guesses++;
}
