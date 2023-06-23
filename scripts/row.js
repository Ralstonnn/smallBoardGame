import Item from "./item.js";

export default class Row {
  constructor(rowIndex, itemsCount, rowItemsData) {
    this.itemsData = rowItemsData;
    this.rowIndex = rowIndex;
    this.itemsCount = itemsCount;
    this.init();
  }

  init() {
    this.generateRow();
  }

  generateRow() {
    const row = document.createElement("div");
    row.className = "row";
    row.id = "row-" + this.rowIndex;
    for (let i = 0; i < this.itemsCount; i++) {
      const item = new Item(this.rowIndex, i, this.itemsData[i]);
      row.appendChild(item.element);
    }
    this.element = row;
  }
}
