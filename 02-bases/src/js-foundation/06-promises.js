

const {httpClientPlugin} = require('../plugins/hhtp-client-plugin');

const getPokemonById = async( id ) =>{

    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    const pokemon = await httpClientPlugin.get(url);

    console.log(pokemon.name);

    
    // return fetch(url)
    //     .then((response) => response.json())
    //     .then( (pokemon) =>pokemon.name )
} 


module.exports = getPokemonById;



