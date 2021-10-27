import EMOTES from "../assets/emotes.json";

class BaseEmoji extends HTMLElement {
  constructor() {
    super();
    this.name = this.getAttribute("name") || "no-face";
    this.size = this.getAttribute("size") || 24;
    this.hasName = Object.keys(EMOTES).includes(this.name);

    this.render();
  };

  get face() {
    return this.hasName ? EMOTES[this.name] : EMOTES["no-face"];
  }

  render() {
    this.innerHTML = `
    <div class="container" style="font-size:${this.size}px">${this.face}</div>
  `;
  };
}
customElements.define("base-emoji", BaseEmoji);
