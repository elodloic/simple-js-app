const pokemonList = [
    {name: 'Bulbasaur', height: 0.7, types: ['grass', 'poison']},
    {name: 'Squirtle', height: 0.5, types: ['water']},
    {name: 'Butterfree', height: 1.1, types: ['bug', 'flying']},
];

function listArray(pokemon) {
    if (pokemon.height >= 1) {
        document.write(`<p>${pokemon.name} (height: ${pokemon.height}) - Wow, that’s big!</p>`);
    }
    else {
        document.write(`<p>${pokemon.name} (height: ${pokemon.height})</p>`);}
    }
  pokemonList.forEach(listArray);