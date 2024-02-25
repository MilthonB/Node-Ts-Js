
const { getAge,getUuid } = require('./plugins')

// const { emailTamplate } = require('./js-foundation/01-template')
// require('./js-foundation/02-destructuring')
// const { getuserById } = require('./js-foundation/03-callback')
// const { getuserById } = require('./js-foundation/05-factory')
const { buildMakePerson } = require('./js-foundation/05-factory')


// Es un funcion que regresa una funcion 
const makeAperson = buildMakePerson( { getAge,getUuid } )

const obj = { name: 'Goku', birthdate: '1993-01-19'}

const goku = makeAperson(obj)

console.log(goku)






//console.log(getuserById(3))
 
//console.log(emailTamplate);