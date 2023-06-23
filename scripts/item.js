import { getRandomWord } from "../mocks/words.js";

export default class Item {
  constructor(i, j, item) {
    this.index = [i, j];
    this.isOpen = item.isOpen;
    this.content = item.content;
    this.init();
  }

  init() {
    this.generateItem();
    this.setListeners();
  }

  setItemData() {
    this.element.setAttribute("is-open", this.isOpen);
    this.element.innerHTML = this.content;
  }

  generateItem() {
    const item = document.createElement("div");
    item.className = "item";
    item.id = "item-" + this.index[0] + "-" + this.index[1];
    this.element = item;
    this.setItemData();
  }

  setListeners() {
    this.element.addEventListener("click", () => {
      this.isOpen = !this.isOpen;
      this.element.setAttribute("is-open", this.isOpen);
      this.content = this.isOpen ? getRandomWord() : null;
      this.setItemData();

      const event = new CustomEvent(this.isOpen ? "open" : "closed", {
        detail: {
          index: this.index,
          content: this.content,
        },
        bubbles: true,
      });

      this.element.dispatchEvent(event);
    });
  }
}
