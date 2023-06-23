import Board from "./scripts/board.js";

const root = document.getElementById("root");
const form = document.getElementById("rows-columns-form");
const showFormButton = document.getElementById("show-form");
showFormButton.style.display = "none";
const board = new Board();

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formFields = e.target.elements;
  const rows = formFields.rows.value;
  const columns = formFields.columns.value;

  form.style.display = "none";
  showFormButton.style.display = "block";

  console.log(rows);
  console.log(columns);

  board.init(rows, columns);

  formFields.rows.value = "";
  formFields.columns.value = "";
});

showFormButton.addEventListener("click", () => {
  root.removeChild(board.element);
  form.style.display = "flex";
  board.reset();
});
