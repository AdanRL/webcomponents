import "../components/RickMortyCharacter";

const container = document.querySelector(".container");

for (let i = 1; i < 14; i++) {
  const rickMortyCharacter = document.createElement("rick-morty-character");
  rickMortyCharacter.setAttribute("character-id", i);
  container.appendChild(rickMortyCharacter);
}
