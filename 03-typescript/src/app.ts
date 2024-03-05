import { findWarriorById } from "./services/warrior.service"

const warrior = findWarriorById(1)

console.log(warrior?.name ?? 'Warrior Z not found')



