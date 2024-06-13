let pokemonRepository = (function () {
    const pokemonList = [
        {name: 'Bulbasaur', height: 0.7, types: ['grass', 'poison']},
        {name: 'Squirtle', height: 0.5, types: ['water']},
        {name: 'Butterfree', height: 1.1, types: ['bug', 'flying']},
    ];
  
    function add(item) {
        pokemonList.push(item);
      }
    
      function getAll() {
        return pokemonList;
      }
    
      return {
        add: add,
        getAll: getAll
      };
    })();

function listArray(pokemon) {
    if (pokemon.height >= 1) {
        document.write(`<p>${pokemon.name} (height: ${pokemon.height}) - Wow, that’s big!</p>`);
    }
    else {
        document.write(`<p>${pokemon.name} (height: ${pokemon.height})</p>`);}
    }
    pokemonRepository.getAll().forEach(listArray);