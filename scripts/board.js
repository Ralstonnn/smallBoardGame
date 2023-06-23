import Row from "./row.js";

export default class Board {
  init(rowCount, columnCount) {
    this.data = [];
    this.rows = [];
    this.rowCount = rowCount;
    this.columnCount = columnCount;
    this.initItems();
    this.element = this.getBoardElement();
    this.setListeners();
    const root = document.getElementById("root");
    root.appendChild(this.element);
  }

  initItems() {
    for (let i = 0; i < this.rowCount; i++) {
      const tmp = [];
      for (let j = 0; j < this.columnCount; j++) {
        tmp.push({ isOpen: false, content: null });
      }
      this.data.push(tmp);
    }
  }

  getBoardElement() {
    const board = document.createElement("div");
    board.className = "board";

    for (let i = 0; i < this.rowCount; i++) {
      this.rows.push(new Row(i, this.columnCount, this.data[i]));
    }

    this.rows.forEach((row) => board.appendChild(row.element));
    return board;
  }

  setItem(isOpen, index, content) {
    const [i, j] = index;
    this.data[i][j].content = content;
    this.data[i][j].isOpen = isOpen;
  }

  setListeners() {
    this.element.addEventListener("open", (e) => {
      const { index, content } = e.detail;
      this.setItem(true, index, content);
    });
    this.element.addEventListener("closed", (e) => {
      const { index, content } = e.detail;
      this.setItem(false, index, content);
    });
  }

  reset() {
    this.data = [];
    this.columnCount = 0;
    this.rowCount = 0;
    this.rows = 0;
    this.element = null;
  }
}
