const warriors = [
    {
        id:1,
        name:'Goku',
        owner:'tierra'
    },
    {
        id:2,
        name:'Ghoan',
        owner:'tierra'
    },
    {
        id:3,
        name:'Ghoten',
        owner:'tierra'
    },
    {
        id:4,
        name:'Thrunk',
        owner:'tierra'
    },
    {
        id:5,
        name:'Vegeta',
        owner:'tierra'
    },
];



const findWarriorById = ( id:number ) => {
    return warriors.find( (warrior) => warrior.id === id )
}


const warrior = findWarriorById(3)

console.log(warrior?.name ?? 'Warrior Z not found')



