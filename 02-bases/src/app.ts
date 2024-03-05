// const { getAge,getUuid } = require('./plugins')

import { buildLogger } from "./plugins/logger.plugin";

// const { emailTamplate } = require('./js-foundation/01-template')
// require('./js-foundation/02-destructuring')
// const { getuserById } = require('./js-foundation/03-callback')
// const { getuserById } = require('./js-foundation/05-factory')
// const { buildMakePerson } = require('./js-foundation/05-factory')
// const getPokemonById = require('./js-foundation/06-promises')
// const { buildLogger } = require('./plugins')

const logger = buildLogger('app.js')

logger.log('Hola mundo')
logger.error('Esto es algo malo')

// getPokemonById(1)
//     .then( (pokemon) => console.log(pokemon))
//     .catch( (err) => console.log('Intente de nuevo') )
//     .finally( () => console.log('Final') )





// ! Es un funcion que regresa una funcion 
// const makeAperson = buildMakePerson( { getAge,getUuid } )

// const obj = { name: 'Goku', birthdate: '1993-01-19'}

// const goku = makeAperson(obj)

// console.log(goku)







//console.log(getuserById(3))
 
//console.log(emailTamplate);