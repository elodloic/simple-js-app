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


    function showDetails(pokemon) {
      console.log(pokemon)
    }

    function addListItem(pokemon) {
      let container = document.querySelector('.pokemon-list');
      let listItem = document.createElement('li')
      let button = document.createElement('button')
      button.innerText = pokemon.name;
      button.classList.add('pokemon-card');
      listItem.appendChild(button);
      container.appendChild(listItem);
      button.addEventListener('click', function (event) {
        showDetails(pokemon); 
        })}

    pokemonRepository.getAll().forEach(addListItem);