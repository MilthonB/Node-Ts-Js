

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



const getuserById = ( id, callback ) =>{


    const user = users.find( user => user.id === id);



    (user)
    ?callback(null, user)
    :callback(`USUARIO NO ENCONTRADO ${id}`);
    
}


module.exports = {
    getuserById
}





