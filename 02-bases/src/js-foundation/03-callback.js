

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



function getuserById( id, callback ){


    const user = users.find( function(user){
        return user.id === id;
    });


    if(!user){
        return callback(`USUARIO NO ENCONTRADO ${id}`);
    }


    return callback(null, user)

}


module.exports = {
    getuserById
}





