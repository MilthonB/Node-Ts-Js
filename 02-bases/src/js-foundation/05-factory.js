

const { v4 : uuidv4 } = require('uuid')
const getage = require('get-age')



//crear fincion de flecha con desustructuracion de 
//objeto al recibir los parametros
const buildPerson = ( { name, birthdate } ) => {

    return {
        id: uuidv4(),
        name,
        birthdate,
        age: getage(birthdate)
    }
}

const obj = { name: 'Goku', birthdate: '1993-01-19'}

const person = buildPerson(obj);


console.log(person)






