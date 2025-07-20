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
function topStudents(name);{

}