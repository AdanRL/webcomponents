import EMOTES from "../assets/emotes.json";

class BaseEmoji extends HTMLElement {
  constructor() {
    super();
    this.name = this.getAttribute("name");
    this.size = this.getAttribute("size");
    this.hasName = Object.keys(EMOTES).includes(this.name);

    this.render();
  };

  get face() {
    return this.hasName ? EMOTES[this.name] : "☠";
  }

  render() {
    this.innerHTML = `
    <div class="container">${this.face}</div>
  `;
  };
}
customElements.define("base-emoji", BaseEmoji);
