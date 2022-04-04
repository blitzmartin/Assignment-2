var fs = require('fs');
const pokemon = require('pokemon');

fs.readFile('./ids_pokemon.txt', 'utf8', function (err, data) {
    
    const pokemonArr = data.split(' ');

    for (let i = 0; i < pokemonArr.length; i++) {

        pokemonArr[i] = pokemon.getName(pokemonArr[i], 'en');

        fs.appendFile('./names_pokemon.txt', pokemonArr[i] + "\n", 'utf8', function (err) {
            if (err) {
                return console.log(err);
            }
            console.log(`You catched a wild ${pokemonArr[i]}!`);
        });
    }
});

