

const { getUuid,getAge } = require('../plugins/index')



//crear fincion de flecha con desustructuracion de 
//objeto al recibir los parametros
const buildPerson = ( { name, birthdate } ) => {

    return {
        id: getUuid(),
        name,
        birthdate,
        age: getAge( birthdate ),
    }
}

const obj = { name: 'Goku', birthdate: '1993-01-19'}

const person = buildPerson(obj);


console.log(person)






