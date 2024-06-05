const pokemonList = [
    {name: 'Bulbasaur', height: 0.7, types: ['grass', 'poison']},
    {name: 'Squirtle', height: 0.5, types: ['water']},
    {name: 'Butterfree', height: 1.1, types: ['bug', 'flying']},
];

for (let i = 0; i < pokemonList.length; i++) 
    if (pokemonList[i].height >= 1) {
        document.write(`<p>${pokemonList[i].name} (height: ${pokemonList[i].height}) - Wow, that’s big!</p>`);
    }
    else {
        document.write(`<p>${pokemonList[i].name} (height: ${pokemonList[i].height})</p>`);
    }
