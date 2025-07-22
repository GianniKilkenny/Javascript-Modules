const colors = ["red", "orange", "yellow", "green", "blue"];
colors.forEach((color) => {
  const element = document.getElementById(color);

  element.addEventListener("click", () => {
    document.body.style.backgroundColor = color;
  });
});
