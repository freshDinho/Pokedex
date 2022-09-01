let characters = JSON.parse(poke_file).results; // array de personajes
// let characters = JSON.parse(file) =>  { results [{...},{...}]}
// let characters = JSON.parse(file).results => [{...},{...},{...}]
// console.log(characters.results[0].birth_year)
// console.log(characters[0].birth_year)
// console.log(characters);

let input_character_name = document.getElementById("input_character_name");
let container = document.getElementById("container");
let cont = 0;

function search_character_button_click() {
  let character_details = search_character(input_character_name.value);
  if (cont == 0) {
    container.innerHTML = `
    <button onclick="search_character_button_click()">
      <span class="text-white d-flex justify-content-center">Name: ${character_details.name}</span>
      <span class="text-white d-flex justify-content-center">Type: ${character_details.type}</span>
      <img src="${character_details.ThumbnailImage}"/>
    </button>
  `;
    cont = 1;
  } else if (cont == 1) {
    container.innerHTML = `
    <button onclick="search_character_button_click()">
      <span class="text-white d-flex justify-content-center">Name: ${character_details.name}</span>
      <span class="text-white d-flex justify-content-center">Type: ${character_details.type}</span>
      <span class="text-white d-flex justify-content-center">Number: ${character_details.number}</span>
      <span class="text-white d-flex justify-content-center">Height: ${character_details.height}</span>
      <span class="text-white d-flex justify-content-center">Weakness: ${character_details.weakness}</span>
      <span class="text-white d-flex justify-content-center">Abilities: ${character_details.abilities}</span>
      <img src="${character_details.ThumbnailImage}"/>
    </button>
  `;
    cont = 0;
  }
}

function search_character(character_name) {
  // Busqueda secuencial
  for (let i = 0; i < characters.length; i++) {
    // characters[i] => { name: "Luke Skywalker", age...}
    if (characters[i].name == character_name) {
      return characters[i];
    } else {
      container.innerHTML = `
        <div class="">
          <span class="text-danger">No ha encontrado el pokemon</span>
        </div>
      `;
    }
  }
}
