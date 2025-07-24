async function fetchData() {
  const loadingText = document.getElementById("loading");
  const dataText = document.getElementById("data");

  loadingText.style.display = "block"; // show loading message
  dataText.textContent = "";

  try {
    const response = await new Promise((resolve) => {
      setTimeout(() => resolve("Data loaded successfully"), 3000);
    });
    loadingText.style.display = "none";
    dataText.textContent = response; //show data
  } catch (error) {
    loadingText.style.display = "none";
    dataText.textContent = "error loading data";
  } finally {
    loadingText.style.display = "none";
  }
}
