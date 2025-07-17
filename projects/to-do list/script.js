const tasks = []; // init where todos will go

while (true) {
  // asking for user input
  let task = prompt("Type 'done' to finsh your to do list");

  //check if user input is done
  if (task.toLowerCase() === "done") {
    break; // if done it breaks out of the loop
  }

  tasks.push(task); // Adding User Input
}

// To display task
console.log("Your to-do list:");

let i = 0;
while (i < tasks.length) {
  console.log(`${i + 1}. ${tasks[i]}`);
  i++;
}
// tasks.forEach((task, index) => {
//   console.log(`${index + 1}. ${task}`);
// });
