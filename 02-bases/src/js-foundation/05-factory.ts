import { getUuid } from '../plugins/get-id.plugin';
import { getAge } from '../plugins/get-age.plugin';

interface BuildMakerPersonOptions {
    getUuid: ()=>  string;
    getAge: (birthdate:string) => number
}

interface PersonOption {
    name:string;
    birthdate:string
}

// Factory function es una funcion que regresa una funcion
export const buildMakePerson = ({ getUuid, getAge }:BuildMakerPersonOptions) =>{

    return  ({name,birthdate}:PersonOption)=>{
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
