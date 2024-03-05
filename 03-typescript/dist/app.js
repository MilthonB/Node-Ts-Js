"use strict";
var _a;
const warriors = [
    {
        id: 1,
        name: 'Goku',
        owner: 'tierra'
    },
    {
        id: 2,
        name: 'Ghoan',
        owner: 'tierra'
    },
    {
        id: 3,
        name: 'Ghoten',
        owner: 'tierra'
    },
    {
        id: 4,
        name: 'Thrunk',
        owner: 'tierra'
    },
    {
        id: 5,
        name: 'Vegeta',
        owner: 'tierra'
    },
];
const findWarriorById = (id) => {
    return warriors.find((warrior) => warrior.id === id);
};
const warrior = findWarriorById(10);
console.log((_a = warrior === null || warrior === void 0 ? void 0 : warrior.name) !== null && _a !== void 0 ? _a : 'Warrior Z not found');
