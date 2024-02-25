

const { getUuid,getAge } = require('../plugins/index')



// Factory function es una funcion que regresa una funcion
const buildMakePerson = ({ getUuid, getAge }) =>{

    return  ({name,birthdate})=>{
        return {
            id: getUuid(),
            name,
            birthdate,
            age: getAge( birthdate ),
        }
    }
}



//crear fincion de flecha con desustructuracion de 
//objeto al recibir los parametros
// const buildPerson = ( { name, birthdate } ) => {

//     return {
//         id: getUuid(),
//         name,
//         birthdate,
//         age: getAge( birthdate ),
//     }
// }

// const obj = { name: 'Goku', birthdate: '1993-01-19'}

// const person = buildPerson(obj);


// console.log(person)

module.exports = {
    buildMakePerson
}




