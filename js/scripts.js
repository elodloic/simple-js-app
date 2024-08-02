let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  function add(item) {
    pokemonList.push(item);
  }

  function getAll() {
    return pokemonList;
  }

  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    });
  }

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      item.imageUrl = details.sprites.other['dream_world'].front_default;
      item.height = details.height;
      item.types = details.types.map(typeInfo => typeInfo.type.name);
    }).catch(function (e) {
      console.error(e);
    });
  }

  function addListItem(pokemon) {
    let container = document.querySelector('.pokemon-list');
    let listItem = document.createElement('div');
    listItem.classList.add('col-12', 'col-md-4', 'col-sm-6', 'mb-1', 'list-group-item', 'border-0');

    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('pokemon-button', 'btn', 'btn-primary', 'btn-block');
    button.setAttribute('data-toggle', 'modal');
    button.setAttribute('data-target', '#modal-container');
    listItem.appendChild(button);
    container.appendChild(listItem);
    
    button.addEventListener('click', function () {
      showDetails(pokemon);
    });
  }

  return {
    add: add,
    getAll: getAll,
    loadList: loadList,
    loadDetails: loadDetails,
    addListItem: addListItem
  };
})();

function showDetails(pokemon) {
  clearModal();
  pokemonRepository.loadDetails(pokemon).then(function () {
    showModal(pokemon);
  });
}

function clearModal() {
  let modalTitle = document.querySelector('.modal-title');
  let modalBody = document.querySelector('.modal-body');

  modalTitle.innerText = 'Loading...';
  modalBody.innerHTML = '<div class="text-center"><div class="spinner-border" role="status"><span class="sr-only">Loading...</span></div></div>';
}

function showModal(pokemon) {
  let modalTitle = document.querySelector('.modal-title');
  let modalBody = document.querySelector('.modal-body');

  modalTitle.innerText = pokemon.name;
  
  modalBody.innerHTML = '';
  
  let heightElement = document.createElement('p');
  heightElement.innerText = `Height: ${pokemon.height}`;

  let typesElement = document.createElement('p');
  typesElement.innerText = `Types: ${pokemon.types.join(', ')}`;

  let imageElement = document.createElement('img');
  imageElement.setAttribute('src', pokemon.imageUrl);
  imageElement.classList.add('img-fluid');

  let imageWrapper = document.createElement('div');
  imageWrapper.classList.add('d-flex', 'justify-content-center');
  imageWrapper.appendChild(imageElement);

  modalBody.appendChild(heightElement);
  modalBody.appendChild(typesElement);
  modalBody.appendChild(imageWrapper);

  $('#modal-container').modal('show');
}

pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
