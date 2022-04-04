var fs = require('fs');
const pokemon = require('pokemon');

fs.readFile('./ids_pokemon.txt', 'utf8', function (err, data) {
    const pokemonArr = data.split(' ');

    console.log("GOTTA CATCH 'EM ALL!!!");
    for (let i = 0; i < pokemonArr.length; i++) {
        if (pokemonArr[i] < 150) {
            console.log(pokemon.getName(pokemonArr[i], 'en'));
        } else {
            console.log('NOT FOUND')
        }
    }
    return;
});

