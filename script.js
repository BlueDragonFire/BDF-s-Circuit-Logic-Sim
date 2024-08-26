document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector(".grid");

  // Use a nested for loop to create the grid cells
  for (let i = 0; i < 50; i++) {
    for (let j = 0; j < 50; j++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      grid.appendChild(cell);
    }
  }
});
