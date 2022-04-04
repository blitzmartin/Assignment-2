var fs = require('fs');
const pokemon = require('pokemon');

const data = fs.readFileSync('./ids_pokemon.txt', 'utf8');
var pokemonArr = data.split(' ');
//console.log(pokemonArr);
console.log("GOTTA CATCH 'EM ALL!");
for (let i = 0; i < pokemonArr.length; i++) {
    console.log(pokemon.getName(pokemonArr[i], 'en'));
}
console.log(__dirname);