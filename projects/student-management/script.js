const students = [];

// Add student
function addStudent(name, grade) {
  students.push({
    name,
    grade,
  });
}

// Remove Student
function removeStudent(name) {
  const index = students.findIndex((student) => student.name === name);
  if (index !== -1) {
    students.splice(index, 1);
    console.log(name, " has been removed");
  } else {
    console.log(name, "was not found");
  }
}

// function to filter students
function topStudents(minGrade) {
  return students.filter((student) => student.grade >= minGrade);
}

// function to map students in formatted list
function formatStudentList() {
  return students.map((student) => `${student.name} - Grade: ${student.grade}`);
}

// start
console.log("students =", students);

// add students
addStudent("Gianni", 90);
addStudent("emily", 85);
addStudent("picos", 100);
addStudent("sam", 70);
addStudent("blueface", 50);

console.log("students =", students);

console.log(formatStudentList());

console.log(students);

console.log("Students with A's");
console.log(topStudents(80));
