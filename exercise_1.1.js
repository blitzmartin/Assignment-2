var fs = require('fs');
const pokemon = require('pokemon');

const data = fs.readFileSync('./ids_pokemon.txt', 'utf8');
const pokemonArr = data.split(' ');
//console.log(pokemonArr);
console.log("GOTTA CATCH 'EM ALL!!!");
for (let i = 0; i < pokemonArr.length; i++) {
    if (pokemonArr[i] < 150){
        console.log(pokemon.getName(pokemonArr[i], 'en'));
    } else {
        console.log('NOT FOUND')
    }
    
}
console.log(__dirname);