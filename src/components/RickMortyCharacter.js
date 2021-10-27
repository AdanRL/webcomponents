const PREFIX_URL = "https://rickandmortyapi.com/api/character/";
const LOADING_GIF = "cargando.gif";
class RickMortyCharacter extends HTMLElement {
  constructor() {
    super();

    this.data = {};
    this.attachShadow({ mode: "open" });
    this.render();
  }

  get Styles() {
    return /* css */`
    .container {
      border: 5px solid black;
      display: inline-flex;
    }
    img {
      height: 128px;
      width: 128px;
    }
    `;
  }

  fetchData() {
    fetch(`${PREFIX_URL}${this.charId}`)
      .then(response => response.json())
      .then(data => {
        this.data = {
          name: data.name,
          status: data.status,
          species: data.species,
          gender: data.gender,
          origin: data.origin.name,
          image: data.image
        };
        setTimeout(() => this.render(), 5);
      });
  }

  connectedCallback() {
    this.charId = this.getAttribute("character-id");
    this.fetchData();
  }

  renderLoading() {
    this.shadowRoot.innerHTML = /* html */`
    <img src="${LOADING_GIF}" alt="" class="image">
    `;
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>
    ${this.Styles}
    </style>
      <div class="container">
        <div class="data">
          <div class="name">${this.data.name}</div>
          <div class="status">${this.data.status}</div>
          <div class="specie">${this.data.species}</div>
          <div class="gender">${this.data.gender}</div>
          <div class="origin">${this.data.origin}</div>
          <img src="${this.data.image}" alt="${this.data.name}" class="image">
        </div>
      </div>
    `;
  }
}
customElements.define("rick-morty-character", RickMortyCharacter);
