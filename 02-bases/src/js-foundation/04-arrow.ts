

interface User  {
    id: number,
    name: string,
}


const users = [
    {
        id:1,
        name:'Goku'
    },
    {
        id:2,
        name:'Ghoan'
    },
    {
        id:3,
        name:'Ghoten'
    },
    {
        id:4,
        name:'Thrunk'
    },
    {
        id:5,
        name:'Vegeta'
    },
];



export const getuserById = ( id:number, callback:(err?:string, user?:User)=>{} ) =>{


    const user = users.find( user => user.id === id);



    (user)
    ?callback(undefined, user)
    :callback(`USUARIO NO ENCONTRADO ${id}`);
    
}






