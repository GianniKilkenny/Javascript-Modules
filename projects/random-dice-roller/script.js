let count = 0;

const scoreTracker = {
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
};

function rollDice(num) {
  let i = 0;
  while (i < num) {
    // number between 1 and 6
    let randomNum = Math.floor(Math.random() * (6 - 1 + 1) + 1);

    // Tells you what you rolled
    console.log(`You rolled a ${randomNum}`);
    count++;
    i++;

    // scoreTracker
    scoreTracker[randomNum]++;
  }
}

function diceRolled() {
  console.log(`You rolled the die ${count} times`);
}

function numbersRolled() {
  console.log(`You rolled a 1, ${scoreTracker[1]} times`);
  console.log(`You rolled a 2, ${scoreTracker[2]} times`);
  console.log(`You rolled a 3, ${scoreTracker[3]} times`);
  console.log(`You rolled a 4, ${scoreTracker[4]} times`);
  console.log(`You rolled a 5, ${scoreTracker[5]} times`);
  console.log(`You rolled a 6, ${scoreTracker[6]} times`);
}

rollDice(10000);
diceRolled();
numbersRolled();
