// This runs only after the DOM has loaded
window.onload = function () {
  // Add Enter key support
  document
    .getElementById("todoInput")
    .addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        getInputValue();
      }
    });
};

function getInputValue() {
  // gets the input value and stores it
  const newInput = document.getElementById("todoInput");
  const val = newInput.value;

  //   lists the content in a paragraph and adds a class
  const list = document.createElement("p");
  list.textContent = val;
  list.classList.add("todo-item");

  // element added to page
  const container = document.getElementById("Inputs");
  container.appendChild(list);

  // removed if clicked on
  list.addEventListener("click", function () {
    list.remove();
  });
  // Resets the text box after a an activity was listed
  newInput.value = "";
}
