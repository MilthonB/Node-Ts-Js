import { warriors } from "../data/warrios"



export const findWarriorById = ( id:number ) => {
    return warriors.find( (warrior) => warrior.id === id )
}



